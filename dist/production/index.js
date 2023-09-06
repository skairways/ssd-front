#! /usr/bin/env node
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
const main_1 = require("../shared/main");
const generateTemplate_1 = require("./generateTemplate");
function startProd() {
    return __awaiter(this, void 0, void 0, function* () {
        const { folderName, templateName } = yield (0, main_1.startInquiry)();
        (0, generateTemplate_1.generateTemplate)(folderName, templateName);
    });
}
startProd();
//# sourceMappingURL=index.js.map