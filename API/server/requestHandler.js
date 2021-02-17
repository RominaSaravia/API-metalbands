const url = require("url");
const path = require("path");
const StringDecoder = require("string_decoder").StringDecoder;
const { randomNum } = require("./util");
const router = require("./router");

module.exports = (req, res) => {
  const actualUrl = req.url;
  const urlParsed = url.parse(actualUrl, true);

  const urlPath = urlParsed.pathname;
  const cleanPath = urlPath.replace(/^\/+|\/+$/g, '');

  //Method HTTP
  const requestType = req.method.toLowerCase();

  //Permissions: CORS - write headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Request-Methods", "OPTIONS, GET, PUT, DELETE, POST");

  //Give inmediate response when method is OPTIONS
  if (requestType === 'options') {
    res.writeHead(204);
    res.end()
    return;
  }

  const { query = {} } = urlParsed;

  const { headers = {} } = req;

  //Get payload, If there is one
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  //when the request received a payload, acumulate data
  req.on('data', (data) => {
    buffer += decoder.write(data);

  });

  //Got all data, tell decoder to finish
  req.on('end', () => {
    buffer += decoder.end();

    if (headers["content-type"] === "application/json") {
      buffer = JSON.parse(buffer);
    };


    //Check Subroutes
    if (cleanPath.indexOf("/") > -1) {
      //Split routes
      var [rutaPrincipal, indice] = cleanPath.split("/");

    }

    //Order data from request
    let data = {
      indice,
      urlData: rutaPrincipal || cleanPath,
      query,
      requestType,
      headers,
      payload: buffer
    };

    if (requestType === "post" && data.payload) {
      data.payload.id = randomNum();
    }

    if (requestType === "get" && data.urlData === "") {
      data.urlData = "index.html";

    }

    const allMimeType = {
      ".html": "text/html",
      ".json": "application/json",
      ".ico": "image/x-icon",
      ".css": "text/css",
      ".js": "text/javascript",
      ".map": "application/octet-stream",
      ".png": "image/png",
      ".jpg": "image/jpeg"
    }

    const files = ["index.html", "manifest.json", "favicon.ico", "static"];
    const fileType = files.includes(data.urlData);

    if (requestType === "get" && data.urlData === "static" && fileType) {
      data.indice = cleanPath;
    }


    //Choose handler depending of the route and asign function
    let handler;
    if (data.urlData && router[data.urlData] && router[data.urlData][requestType]) {
      handler = router[data.urlData][requestType];
    } else {
      handler = router.notFound;
    }

    console.log({ data, router });

    //Run handler, send response
    if (typeof handler === 'function') {
      handler(data, (statusCode = 200, message) => {
        if (fileType) {
          let filePath = path.join(__dirname, "public", data.urlData);
          if (data.urlData === "static") {
            filePath = path.join(__dirname, "public", data.indice);

          }
          const fileExtension = path.extname(filePath);
          const mimeType = allMimeType[fileExtension];

          res.writeHead(statusCode, {
            "Content-Type": mimeType
          });
          return message.pipe(res);

        }

        let response = null
        if (typeof message === "string") {
          response = message
        }
        if (typeof message === "object") {
          response = JSON.stringify(message);
        }

        res.setHeader("Content-Type", "application/json");
        res.writeHead(statusCode);
        res.end(response);

      })
    }



  });

};