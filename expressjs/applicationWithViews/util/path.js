const path = require("path");
                //Will return the main module / file's dir path that turns our application
module.exports = path.dirname(process.mainModule.filename);