const { getListOfFiles, getOne, create, update, deleteOne} = require("./../../data-handler");
const {cleanWords} = require("./../../util");
const { v4: uuidv4 } = require("uuid");


const getListOfElements = function closureList(entity) {
  return async function closureHandlerList(req, res) {
    if (!entity) {
      return res.status(404).json({ error: "Error: entity missing" });
  
    }
    const elements = await getListOfFiles({ entityPath: entity })

    if (req.query && (req.query.name|| req.query.style|| req.query.state )) {

      const queryKeys = Object.keys(req.query);
      let bandResponse = [...elements];
        
        bandResponse = bandResponse.filter((_band) => {
          let result = false;

          for (const key of queryKeys) {
            const search = cleanWords(req.query[key]);
            const regex = new RegExp(search, "ig");

            const bandSearch = cleanWords(_band[key])


            result = bandSearch.match(regex);

            if(result) {
              break;
            }

          }
          return result
        })

      return res.status(200).json(bandResponse);

    }
  
    res.status(200).json(elements);
  }
}

const getOneElement = function closureOne(entity) {
  return async function closureHandlerOne(req, res)  {
    const { _id = null } = req.params;
    if (!entity) {
      return res.status(400).json({ error: "Error: entity missing" });
    }
    if (!_id) {
      return res.status(404).json({ error: "_id missing" });
    }
  
    const band = await getOne({
      entityPath: entity,
      fileName: _id,
    })
  
    if (band) {
      return res.status(200).json(band);
    }
    res.status(404).json({ error: "Error: element not found" });
  };
}

const createEntity = function closureCreate(entity) {
  return async function clousureHandlerCreate(req, res) {
    if (!entity) {
      res.status(404).json({ error: "Error: entity missing" });
  
    }
  
    if (req.body && Object.keys(req.body).length > 0) {
      const _id = uuidv4()
      const newBandData = { ...req.body, _id }
      const newBand = await create({
        entityPath: entity,
        fileName: _id,
        savedata: newBandData
      })
  
      return res.status(200).json(newBand)
    }
  
    return res.status(400).json({ error: "body missing" })
  }

}

const editEntity = function closureEdit(entity){
  return async function closureHandlerEdit(req, res){
    const {_id = null } = req.params;
    if (!entity) {
      res.status(404).json({ error: "Error: entity missing" });
    }
    if (!_id) {
      return res.status(400).json({ error: "_id missing" })
    }

    if (req.body && Object.keys(req.body).length > 0) {
      const BandData = { ...req.body, _id }
      const bandToBeUpdated = await update({
        entityPath: entity,
        fileName: _id,
        newData: BandData
      })
      return res.status(200).json(bandToBeUpdated)
    }
    return res.status(400).json({ error: "body missing" })
  }

}

const deleteOneEntity = function closureDeleteOne(entity) {
  return  async function closureHandlerDelete(req, res) {
    const { _id = null } = req.params;
    if (!entity) {
      res.status(404).json({ error: "Error: entity missing" });
    }
  
    if (!_id) {
      return res.status(400).json({ error: "_id missing" })
    }
  
    await deleteOne({
      entityPath: entity,
      fileName: _id,
    })
  
    return res.status(204).send()
  
  }
}

module.exports = {
  getListOfElements,
  getOneElement,
  createEntity,
  editEntity,
  deleteOneEntity,
}