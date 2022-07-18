"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
const port = process.env.PORT || 3000;
const urlController = require('./controller/UrlController');
const database = require('./database/MongoConnection');
api.use(express_1.default.json());
database.connect();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(port, () => console.log(`Express listening on Port ${port}`));
//# sourceMappingURL=index.js.map