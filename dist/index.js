#! /usr/bin/env node
"use strict";
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
    chooseTemplate(answers.folderName);
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
                reactTemplate(folderName);
                break;
            case types_1.TemplatesEnum.NEXT:
                nextTemplate(folderName);
                break;
            default:
                break;
        }
    });
}
const filterOnCopy = (src, dest) => {
    return !src.includes("node_modules");
};
function reactTemplate(folderName) {
    const source = "skairways/ssd-front";
    const destination = `./${folderName}`;
    download(source, "temp", function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log("React template created successfully!");
            copyDirectory();
        }
    });
    function copyDirectory() {
        fsExtra
            .copy("temp/src/templates/react", destination, { filter: filterOnCopy })
            .then(() => {
            console.log("Directory copied successfully!");
            cleanup();
        })
            .catch((err) => {
            console.error(err);
        });
    }
    function cleanup() {
        fsExtra.remove("temp", function (err) {
            if (err) {
                console.error(err);
            }
            else {
                console.log("Temporary directory removed!");
            }
        });
    }
}
function nextTemplate(folderName) {
    const source = "skairways/ssd-front/tree/main/src/templates/next";
    const destination = `./${folderName}`;
    fsExtra
        .copy(source, destination, { filter: filterOnCopy })
        .then(() => {
        console.log("React template created successfully!");
    })
        .catch((err) => {
        console.error(err);
    });
}
//# sourceMappingURL=index.js.map