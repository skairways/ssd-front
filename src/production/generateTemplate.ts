const fsExtra = require("fs-extra");
const download = require("download-git-repo");

import { TemplatesEnum } from "../shared/types";

export function generateTemplate(
  folderName: string,
  templateName: TemplatesEnum
) {
  const source = "skairways/ssd-front";
  const dir = "tmp";
  const path = "src/templates";

  console.log(`generating template, please wait...`);

  download(source, dir, function (err: Error) {
    if (err) {
      console.error(err);
    } else {
      copyDirectory();
    }
  });

  function copyDirectory() {
    fsExtra
      .copy(`${dir}/${path}/${templateName}`, folderName)
      .then(() => {
        console.log(`${templateName} template created successfully!`);
        cleanup();
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  function cleanup() {
    fsExtra.remove(dir, function (err: Error) {
      if (err) {
        console.error(err);
      }
    });
  }
}
