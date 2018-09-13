const fs = require('fs');

const potemkin = {
  isDirectory(filePath) {
    fs.lstat(filePath, (err, stats) => {

      if (err)
        return console.log(err);

      return stats.isDirectory();
    })
  }
}

module.exports = potemkin;