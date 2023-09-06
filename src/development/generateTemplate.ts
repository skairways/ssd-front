const fsExtra = require("fs-extra");

import { TemplatesEnum } from "../shared/types";

export function generateTemplate(
  folderName: string,
  templateName: TemplatesEnum
) {
  const path = "src/templates";
  const rootDir="/Users/sultonbeknazarov/Documents/ssd/ssd-front"

  console.log(`generating template, please wait...`);

  fsExtra
    .copy(
      `${rootDir}/${path}/${templateName}`,
      folderName
    )
    .then(() => {
      console.log(`${templateName} template created successfully!`);
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
