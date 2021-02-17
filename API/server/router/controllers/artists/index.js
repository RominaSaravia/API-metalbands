const router = require("express").Router();
const {getListOfElements, getOneElement, createEntity, editEntity, deleteOneEntity} = require("./../genericos") 
const entity = "artists";

const getListHandler =  getListOfElements(entity);
const getOneHandler =  getOneElement(entity);
const createOneHandler =  createEntity(entity);
const editOneHandler =  editEntity(entity);
const deleteOneHandler =  deleteOneEntity(entity);

//Enpoint GET: get the list of bands
router.get("/", getListHandler);

//Enpoint GET: get one band
router.get( "/:_id", getOneHandler);

//Enpoint POST: create new band
router.post("/", createOneHandler);

//Enpoint PUT: edit band
router.put( "/:_id", editOneHandler);

//Enpoint DELETE: delete band
router.delete( "/:_id", deleteOneHandler);

module.exports = router;