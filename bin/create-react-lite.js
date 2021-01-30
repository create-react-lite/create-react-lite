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
  installDependencies,
} = require("./helpers");

const templates = {
  ts: "create-react-lite/template-ts",
};

const main = async () => {
  console.log(`${chalk.bgMagenta("CREATE REACT LITE")}`);
  const start = Date.now();
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
  installDependencies(projectPath);
  logOnFinish(projectPath, newFolderName);
  console.log(
    `Installation finished in: ${(Date.now() - start) / 1000} seconds.`
  );
};

main();
