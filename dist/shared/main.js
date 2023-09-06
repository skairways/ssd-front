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
exports.startInquiry = void 0;
const types_1 = require("./types");
const fsExtra = require("fs-extra");
const figlet = require("figlet");
const inquirer = require("inquirer");
const download = require("download-git-repo");
console.log(figlet.textSync("SSD-FRONT"));
function startInquiry() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield inquirer
            .prompt([
            {
                type: "input",
                name: "folderName",
                message: "Please, write name of your project:",
            },
        ])
            .then((answers) => {
            return chooseTemplate(answers.folderName || "template");
        });
    });
}
exports.startInquiry = startInquiry;
function chooseTemplate(folderName) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield inquirer
            .prompt([
            {
                type: "list",
                name: "template",
                message: "Please choose SSD-template for your next project:",
                choices: [types_1.TemplatesEnum.REACT, types_1.TemplatesEnum.NEXT],
            },
        ])
            .then((answers) => {
            switch (answers.template) {
                case types_1.TemplatesEnum.REACT:
                    return { folderName, templateName: types_1.TemplatesEnum.REACT };
                case types_1.TemplatesEnum.NEXT:
                    return { folderName, templateName: types_1.TemplatesEnum.NEXT };
                default:
                    break;
            }
        });
    });
}
//# sourceMappingURL=main.js.map