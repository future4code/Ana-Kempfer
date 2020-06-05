"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = process.argv[2];
var data = process.argv[3];
try {
    fs.writeFileSync(fileName, data);
    console.log("Arquivo criado com sucesso!");
}
catch (err) {
    console.log(err);
}
