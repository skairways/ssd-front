import { Answers } from "inquirer";
import { TemplatesEnum } from "./types";

const fsExtra = require("fs-extra");
const figlet = require("figlet");
const inquirer = require("inquirer");
const download = require("download-git-repo");

console.log(figlet.textSync("SSD-FRONT"));

export async function startInquiry() {
  return await inquirer
    .prompt([
      {
        type: "input",
        name: "folderName",
        message: "Please, write name of your project:",
      },
    ])
    .then((answers: Answers) => {
      return chooseTemplate(answers.folderName || "template");
    }); 
}

async function chooseTemplate(folderName: string) {
  return await inquirer
    .prompt([
      {
        type: "list",
        name: "template",
        message: "Please choose SSD-template for your next project:",
        choices: [TemplatesEnum.REACT, TemplatesEnum.NEXT],
      },
    ])
    .then((answers: Answers) => {
      switch (answers.template) {
        case TemplatesEnum.REACT:
          return { folderName, templateName: TemplatesEnum.REACT };

        case TemplatesEnum.NEXT:
          return { folderName, templateName: TemplatesEnum.NEXT };

        default:
          break;
      }
    });
}
