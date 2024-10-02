const fs = require("fs");
const path = require("path");

function copyFolderRecursiveSync(source, target) {
  // Check if folder needs to be created or integrated
  const targetFolder = target; // Copy directly to the root of the new project
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy files and subdirectories
  if (fs.lstatSync(source).isDirectory()) {
    let files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      const curTarget = path.join(targetFolder, file);

      if (fs.lstatSync(curSource).isDirectory()) {
        // Recursively copy subdirectories
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        // Copy individual files
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
}

module.exports = {
  copyFolderRecursiveSync,
};
