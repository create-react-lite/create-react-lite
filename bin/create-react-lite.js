#!/usr/bin/env node
const chalk = require("chalk");
const args = require("yargs").argv;
const {
  validateFolderName,
  getProjectPath,
  createFolder,
  downloadTemplate,
} = require("./helpers");

const templates = {
  ts: "create-react-lite/template-ts",
};

const main = async () => {
  console.log(`${chalk.bgMagenta("CREATE REACT LITE")}`);
  args._[0] = "myproject";
  // Creating Folder
  const newFolderName = args._[0];
  validateFolderName(newFolderName);
  const projectPath = getProjectPath(newFolderName); // ?
  createFolder(projectPath);
  // Downloading Template
  const templateUrl = templates["ts"]; // ?
  `github:${templateUrl}`; // ?
  await downloadTemplate(templateUrl, projectPath);
  // await funcs.updateProjectFiles(projectPath, projectName);
  // await funcs.notifyUser(projectPath, projectName);
};

main();
