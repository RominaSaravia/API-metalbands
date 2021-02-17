const PORT = 80;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const entityRouter = require("./router")

//Ruta para archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.get("/artistas", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})

entityRouter(app);


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server iniciado en http://localhost:${PORT}`);
});