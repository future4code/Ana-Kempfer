"use strict";
exports.__esModule = true;
var moment = require("moment");
var fs = require("fs");
moment.locale("pt-br");
var today = moment();
today.utcOffset("-0500").format("DD MM YYYY");
console.log(today.format("DD MM YYYY"));
var arrayOfEvents = [];
function getEvents() {
    var taskFile = 'taskFile.json';
    try {
        var readFile = fs.readFileSync(taskFile);
        var treatedData = readFile.toString();
        var taskFileToObject = JSON.parse(treatedData);
        console.log(taskFileToObject);
    }
    catch (err) {
        console.log("Erro ao ler arquivo");
    }
}
