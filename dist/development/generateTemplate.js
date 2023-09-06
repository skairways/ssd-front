"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTemplate = void 0;
const fsExtra = require("fs-extra");
function generateTemplate(folderName, templateName) {
    const path = "src/templates";
    const rootDir = "/Users/sultonbeknazarov/Documents/ssd/ssd-front";
    console.log(`generating template, please wait...`);
    fsExtra
        .copy(`${rootDir}/${path}/${templateName}`, folderName)
        .then(() => {
        console.log(`${templateName} template created successfully!`);
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.generateTemplate = generateTemplate;
//# sourceMappingURL=generateTemplate.js.map