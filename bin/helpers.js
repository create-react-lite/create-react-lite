const path = require("path");
const chalk = require("chalk");
const util = require("util");
const fs = require("fs");
const cp = require("child_process");
const downloadGitRepo = require("download-git-repo");
const downloadGitRepoAsync = util.promisify(downloadGitRepo);

exports.validateFolderName = (name) => {
  if (!name) {
    throw new Error("Please provide a project directory name");
  }
};

exports.getProjectPath = (name) => {
  return path.join(process.cwd(), name);
};

exports.createFolder = (projectPath) => {
  const folderExists = fs.existsSync(projectPath);
  if (!folderExists) {
    process.stdout.write("Creating directory...");
    fs.mkdirSync(projectPath, { recursive: true });
    process.stdout.write(chalk.green("DONE\n"));
  }
};

exports.downloadTemplate = async (templateUrl, projectPath) => {
  process.stdout.write("Downloading template project...");
  await downloadGitRepoAsync(`github:${templateUrl}#main`, projectPath);
  process.stdout.write(chalk.green("DONE\n"));
};

exports.renameInPackageJson = (projectPath, newFolderName) => {
  const pkgJsonPath = path.join(projectPath, "package.json");
  const packageJSON = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
  const newPackageJSON = {
    ...packageJSON,
    name: newFolderName,
    author: "",
    description: "",
  };

  fs.writeFileSync(
    pkgJsonPath,
    JSON.stringify(newPackageJSON, null, 2),
    "utf8"
  );
};

exports.installDependencies = (projectPath) => {
  process.stdout.write("Installing dependencies...");
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  cp.spawnSync(npm, ["install"], {
    cwd: projectPath,
  });
  process.stdout.write(chalk.green("DONE\n"));
};

exports.logOnFinish = (projectPath, newFolderName) => {
  // notify user that the app is ready
  console.log(`${chalk.bgMagenta(chalk.cyanBright("  SUCCESS!  "))}
  Created project ${chalk.magenta(newFolderName)} at ${chalk.magenta(
    projectPath
  )}
  Navigate to that directory and run the following command:
     ${chalk.cyan("npm start")}
`);
};
