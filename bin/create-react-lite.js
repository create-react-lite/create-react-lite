#!/usr/bin/env node
const chalk = require("chalk");
const args = require("yargs").argv;
const {
  validateFolderName,
  getProjectPath,
  createFolder,
  downloadTemplate,
  renameInPackageJson,
  logOnFinish,
} = require("./helpers");

const templates = {
  ts: "create-react-lite/template-ts",
};

const main = async () => {
  console.log(`${chalk.bgMagenta("CREATE REACT LITE")}`);
  // Creating Folder
  const newFolderName = args._[0];
  validateFolderName(newFolderName);
  const projectPath = getProjectPath(newFolderName); // ?
  createFolder(projectPath);
  // Downloading Template
  const templateUrl = templates["ts"]; // ?
  `github:${templateUrl}`; // ?
  await downloadTemplate(templateUrl, projectPath);
  renameInPackageJson(projectPath, newFolderName);
  logOnFinish(projectPath, newFolderName);
};

main();
