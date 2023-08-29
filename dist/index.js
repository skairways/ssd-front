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
const types_1 = require("./types");
const fsExtra = require("fs-extra");
const figlet = require("figlet");
const inquirer = require("inquirer");
const download = require("download-git-repo");
console.log(figlet.textSync("SSD-FRONT"));
inquirer
    .prompt([
    {
        type: "input",
        name: "folderName",
        message: "Please, write name of your project:",
    },
])
    .then((answers) => {
    chooseTemplate(answers.folderName || "template");
});
function chooseTemplate(folderName) {
    inquirer
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
                generateTemplate(folderName, types_1.TemplatesEnum.REACT);
                break;
            case types_1.TemplatesEnum.NEXT:
                generateTemplate(folderName, types_1.TemplatesEnum.NEXT);
                break;
            default:
                break;
        }
    });
}
const filterOnCopy = (src, dest) => {
    return !src.includes("node_modules");
};
function generateTemplate(folderName, templateName) {
    return __awaiter(this, void 0, void 0, function* () {
        const source = "skairways/ssd-front";
        const destination = `./${folderName}`;
        yield download(source, "temp", function (err) {
            if (err) {
                console.error(err);
            }
            else {
                copyDirectory();
            }
        });
        function copyDirectory() {
            return __awaiter(this, void 0, void 0, function* () {
                yield fsExtra
                    .copy(`temp/src/templates/${templateName}`, destination, {
                    filter: filterOnCopy,
                })
                    .then(() => {
                    console.log(`${templateName} template created successfully!`);
                    cleanup();
                })
                    .catch((err) => {
                    console.error(err);
                });
            });
        }
        function cleanup() {
            return __awaiter(this, void 0, void 0, function* () {
                yield fsExtra.remove("temp", function (err) {
                    if (err) {
                        console.error(err);
                    }
                });
            });
        }
    });
}
//# sourceMappingURL=index.js.map