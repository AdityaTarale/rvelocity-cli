const fs = require("fs");
const path = require("path");
const { packageInstaller } = require("../utils/packageInstaller");
const { detectPackageManager } = require("../utils/detectPackageManager");
const { copyFolderRecursiveSync } = require("../utils/copyFolder");

module.exports = function (args) {
  const isReactNative = args.includes("-rn");

  const projectRoot = path.join(process.cwd());
  const projectRootSrc = path.join(projectRoot, "src");

  if (fs.existsSync(projectRootSrc)) {
    console.log("Project already initialized.");
    return;
  }

  // Initialize for React or React Native based on the flag
  if (isReactNative) {
    initReactNativeProject(projectRoot);
  } else {
    initReactProject();
  }
};

function initReactNativeProject(projectRoot) {
  const foldersToCopy = [
    "api",
    "config",
    "constants",
    "hooks",
    "i18n",
    "navigation",
    "screens",
    "services",
    "store",
    "theme",
    "types",
    "utils",
  ];

  const rnuikitPath = path.join(__dirname, "../rnuikit");
  const rnuikitSrcPath = path.join(rnuikitPath, "src");
  const rnuikitAssetsPath = path.join(rnuikitPath, "assets");
  const rnuikitAppPath = path.join(rnuikitSrcPath, "App.tsx");
  const rnuikitIndexPath = path.join(rnuikitPath, "index.js");

  const targetIndexPath = path.join(projectRoot, "index.js");

  // copy files from rnuikit;
  foldersToCopy.forEach((folder) => {
    const sourcePath = path.join(rnuikitSrcPath, folder);
    const targetPath = path.join(projectRoot, "src", folder);

    if (fs.existsSync(sourcePath)) {
      copyFolderRecursiveSync(sourcePath, targetPath);
    }
  });

  // copy assets folder separately
  if (fs.existsSync(rnuikitAssetsPath)) {
    const targetAssetsPath = path.join(projectRoot, "assets");
    copyFolderRecursiveSync(rnuikitAssetsPath, targetAssetsPath); // Copy the assets folder
  }

  const targetAppRootPath = path.join(projectRoot, "App.tsx");
  const targetAppSrcPath = path.join(projectRoot, "src", "App.tsx");

  // code for updating App.tsx and indexl
  // Delete App.tsx from root if it exists
  if (fs.existsSync(targetAppRootPath)) {
    fs.unlinkSync(targetAppRootPath);
    // "Deleted App.tsx from root."
  }

  // Copy App.tsx from rnuikit to src in the target project
  if (fs.existsSync(rnuikitAppPath)) {
    fs.copyFileSync(rnuikitAppPath, targetAppSrcPath);
    // "Copied App.tsx to src."
  }

  const rnuikitIndexTemplate = fs.readFileSync(rnuikitIndexPath, "utf8");
  // Overwrite index.js with new content
  fs.writeFileSync(targetIndexPath, rnuikitIndexTemplate, "utf8");
  // "Updated index.js."

  // Detect the package manager
  const packageManager = detectPackageManager();
  const dependencies = ["react-native-unistyles"];
  const devDependencies = ["nodemon"];
  // Run the installation
  packageInstaller(packageManager, dependencies);
  packageInstaller(packageManager, devDependencies, true);
  console.log("React Native project initialized");
}

function initReactProject() {}
