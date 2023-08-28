#! /usr/bin/env node

import { Answers } from "inquirer";
import { TemplatesEnum } from "./types";

const fsExtra = require("fs-extra");
const figlet = require("figlet");
const inquirer = require("inquirer");

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
    chooseTemplate(answers.folderName);
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
          reactTemplate(folderName);
          break;

        case TemplatesEnum.NEXT:
          nextTemplate(folderName);
          break;
          
        default:
          break;
      }
    });
}

const filterOnCopy = (src:string, dest:string) => {
  return !src.includes('node_modules');
};

function reactTemplate(folderName: string) {
  const source = "https://github.com/skairways/ssd-front/tree/main/src/templates/react";
  const destination = `./${folderName}`;

  fsExtra
    .copy(
      source,
      destination,
      { filter: filterOnCopy }
    )
    .then(() => {
      console.log("React template created successfully!");
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

function nextTemplate(folderName: string) {
  const source = "https://github.com/skairways/ssd-front/tree/main/src/templates/next";
  const destination = `./${folderName}`;

  fsExtra
    .copy(
      source,
      destination,
      { filter: filterOnCopy }
    )
    .then(() => {
      console.log("React template created successfully!");
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
