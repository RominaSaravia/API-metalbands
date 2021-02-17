const fs = require("fs");
const path = require("path");
const util = require("util")

const rootDir = path.join(__dirname, "data");

const dataHandler = {
  create: async ({ entityPath = "bands", fileName, savedata }) => {

    try {
      //Open new file, creates the file
      const fileDescriptor = await fs.promises.open(
        `${rootDir}/${entityPath}/${fileName}.json`, "wx");

      const data = JSON.stringify(savedata);

      //Write data inside file
      await fs.promises.writeFile(fileDescriptor, data);

      return savedata

    } catch (error) {
      return error;
    }
  },
  getOne: async ({
    entityPath,
    fileName,
    addExtension = true
  }) => {
    try {
      let filePath = null
      if (addExtension) {
        filePath = `${rootDir}/${entityPath}/${fileName}.json`;

      } else {
        filePath = `${rootDir}/${entityPath}/${fileName}`;

      }
      const result = await fs.promises.readFile(filePath, { encoding: "utf-8" });

      const resultJSON = JSON.parse(result);


      return resultJSON
    } catch (error) {
      return new Error(`Error: can't read file from: ${rootDir}/`);

    }

  },
  getListOfFiles: async ({entityPath}) => {
    try {
      //Read directory
      let files = await fs.promises.readdir(`${rootDir}/${entityPath}/`);

      files = files.filter((file) => file.includes(".json"));

      //Read every file, data get store inside an array (arrayPromises)
      const arrayPromises = files.map((file) => {
        return dataHandler.getOne({ entityPath, fileName: file, addExtension: false });
      })

      let dataFiles = await Promise.all(arrayPromises);

      return dataFiles;

    } catch (error) {
      return new Error(`Error: can't get the list of files from: ${rootDir}/`);

    }
  },
  update: async ({
    entityPath = "bands",
    fileName,
    newData
  }) => {
    try {
      const filePath = `${rootDir}/${entityPath}/${fileName}.json`;
      const FileExists = fs.existsSync(filePath);

      if (!FileExists) {
        throw new Error(`Error: file ${fileName} doesn't exists`)
      }

      //Read file and get data
      const oldDataJSON = await dataHandler.getOne({
        entityPath,
        fileName,
        addExtension: true
      });


      //Firt delete file before update
      const DeleteOldFile = await fs.promises.unlink(filePath);

      //Create file again
      const fileDescriptor = await fs.promises.open(filePath, "wx");

      const result = { ...oldDataJSON, ...newData }
      const Stringdata = JSON.stringify(result);
      //Write data inside file
      await fs.promises.writeFile(fileDescriptor, Stringdata);

      return result;

    } catch (error) {
      return error;
    }
  },
  deleteOne: async ({
    entityPath,
    fileName
  }) => {
    try {
      const filePath = `${rootDir}/${entityPath}/${fileName}.json`;
      const FileExists = fs.existsSync(filePath);

      if (!FileExists) {
        throw new Error(`Error: file ${fileName} doesn't exists`);
      }

      //Delete file
      const DeleteOldFile = await fs.promises.unlink(filePath);

      return { msg: "ok" };

    } catch (error) {
      return error;

    }

  }
}

module.exports = dataHandler;