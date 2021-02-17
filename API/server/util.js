const cleanWords = (word) => word.toLowerCase()
.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")


const randomNum = () => {
  return Math.random().toString(36).split(".")[1]
}

module.exports = {
  cleanWords,
  randomNum,
};