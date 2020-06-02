"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get("/users", function (request, response) { return console.log("listagem de usuarios"); });
app.listen(3333);
