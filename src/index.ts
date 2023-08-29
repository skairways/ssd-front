#! /usr/bin/env node

import { Answers } from "inquirer";
import { TemplatesEnum } from "./types";

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
  .then((answers: Answers) => {
    chooseTemplate(answers.folderName || "template");
  });

function chooseTemplate(folderName: string) {
  inquirer
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
          generateTemplate(folderName, TemplatesEnum.REACT);
          break;

        case TemplatesEnum.NEXT:
          generateTemplate(folderName, TemplatesEnum.NEXT);
          break;

        default:
          break;
      }
    });
}

const filterOnCopy = (src: string, dest: string) => {
  return !src.includes("node_modules");
};

async function generateTemplate(folderName: string, templateName: TemplatesEnum) {
  const source = "skairways/ssd-front";
  const destination = `./${folderName}`;

  await download(source, "tmp", function (err: Error) {
    if (err) {
      console.error(err);
    } else {
      copyDirectory();
    }
  });

  async function copyDirectory() {
    await fsExtra
      .copy(`tmp/src/templates/${templateName}`, destination, {
        filter: filterOnCopy,
      })
      .then(() => {
        console.log(`${templateName} template created successfully!`);
        cleanup();
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  async function cleanup() {
    await fsExtra.remove("tmp", function (err: Error) {
      if (err) {
        console.error(err);
      }
    });
  }
}
