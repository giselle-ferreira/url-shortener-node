"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UrlController_1 = require("./controller/UrlController");
const MongoConnection_1 = require("./database/MongoConnection");
const api = (0, express_1.default)();
const port = process.env.PORT || 3000;
api.use(express_1.default.json());
const urlController = new UrlController_1.UrlController();
const database = new MongoConnection_1.MongoConnection();
database.connect();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(port, () => console.log(`Express listening on Port ${port}`));
//# sourceMappingURL=index.js.map