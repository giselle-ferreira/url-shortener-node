"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const URL_1 = require("./../model/URL");
const Constants_1 = require("./../config/Constants");
const uuidv4_1 = require("uuidv4");
class UrlController {
    shorten(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originUrl } = req.body;
            const url = yield URL_1.UrlModel.findOne({ originUrl });
            if (url) {
                res.json(url);
            }
            const hash = (0, uuidv4_1.uuid)();
            const shortUrl = `${Constants_1.config.API_URL}/${hash}`;
            const newUrl = yield URL_1.UrlModel.create({ hash, originUrl, shortUrl });
            res.json({ newUrl });
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = yield URL_1.UrlModel.findOne({ hash });
            if (url) {
                res.redirect(url.originUrl);
                return;
            }
            res.status(400).json({ error: "URL not found" });
        });
    }
}
exports.UrlController = UrlController;
//# sourceMappingURL=UrlController.js.map