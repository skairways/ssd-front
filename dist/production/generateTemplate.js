"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTemplate = void 0;
const fsExtra = require("fs-extra");
const download = require("download-git-repo");
function generateTemplate(folderName, templateName) {
    const source = "skairways/ssd-front";
    const dir = "tmp";
    const path = "src/templates";
    console.log(`generating template, please wait...`);
    download(source, dir, function (err) {
        if (err) {
            console.error(err);
        }
        else {
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
            .catch((err) => {
            console.error(err);
        });
    }
    function cleanup() {
        fsExtra.remove(dir, function (err) {
            if (err) {
                console.error(err);
            }
        });
    }
}
exports.generateTemplate = generateTemplate;
//# sourceMappingURL=generateTemplate.js.map