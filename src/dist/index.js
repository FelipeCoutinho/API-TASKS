"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var routes_1 = require("./routes");
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
dotenv.config(); // para o app poder ler os aquivos .env
var app = express();
typeorm_1.createConnection();
app.use(cors());
app.use(bodyparser.json()); // tem que ser antes das rotas
app.use(routes_1.default);
app.listen(5555, function () {
    console.log('server on');
});
//# sourceMappingURL=index.js.map