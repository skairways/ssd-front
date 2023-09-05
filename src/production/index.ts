#! /usr/bin/env node

import { startInquiry } from "../shared/main";
import { generateTemplate } from "./generateTemplate";

async function startProd() {
  const { folderName, templateName } = await startInquiry();
  generateTemplate(folderName, templateName);
}

startProd();
