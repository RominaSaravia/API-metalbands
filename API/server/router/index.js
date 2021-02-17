const bands = require("./controllers/bands")
const artists = require("./controllers/artists")


module.exports = (app) => {
  app.use("/bands", bands);
  app.use("/artists", artists);
}