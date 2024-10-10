import chalk from "chalk";
import fs from "fs";
import open from "open";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { copyFolderRecursiveSync } from "../utils/copyFolder.js";
import { detectPackageManager } from "../utils/detectPackageManager.js";
import { packageInstaller } from "../utils/packageInstaller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function (platform) {
  const isReactNative = platform === "react-native";

  const projectRoot = process.cwd();
  const projectRootSrc = path.join(projectRoot, "src");

  if (fs.existsSync(projectRootSrc)) {
    console.log(chalk.yellow("Project already initialized."));
    return;
  }

  if (isReactNative) {
    initReactNativeProject(projectRoot);
  } else {
    initReactProject(projectRoot);
  }
}

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
  const rnuiKitMetroConfigPath = path.join(rnuikitPath, "metro.config.js");

  const targetIndexPath = path.join(projectRoot, "index.js");
  const targetAppRootPath = path.join(projectRoot, "App.tsx");
  const targetAppSrcPath = path.join(projectRoot, "src", "App.tsx");
  const targetMetroConfigPath = path.join(projectRoot, "metro.config.js");

  // Copy files from rnuikit;
  foldersToCopy.forEach((folder) => {
    const sourcePath = path.join(rnuikitSrcPath, folder);
    const targetPath = path.join(projectRoot, "src", folder);

    if (fs.existsSync(sourcePath)) {
      copyFolderRecursiveSync(sourcePath, targetPath);
    }
  });

  // Copy assets folder separately
  if (fs.existsSync(rnuikitAssetsPath)) {
    const targetAssetsPath = path.join(projectRoot, "assets");
    copyFolderRecursiveSync(rnuikitAssetsPath, targetAssetsPath); // Copy the assets folder
  }

  // Move App.tsx from root to src
  if (fs.existsSync(targetAppRootPath)) {
    fs.renameSync(targetAppRootPath, targetAppSrcPath);
  }
  // Copy App.tsx from rnuikit if it doesn't exist
  if (fs.existsSync(rnuikitAppPath)) {
    fs.copyFileSync(rnuikitAppPath, targetAppSrcPath);
  }

  // Update index.js
  const rnuikitIndexTemplate = fs.readFileSync(rnuikitIndexPath, "utf8");
  fs.writeFileSync(targetIndexPath, rnuikitIndexTemplate, "utf8");

  // Update metro.config.js whole file
  const rnuikitMetroConfigTemplate = fs.readFileSync(
    rnuiKitMetroConfigPath,
    "utf8"
  );
  fs.writeFileSync(targetMetroConfigPath, rnuikitMetroConfigTemplate, "utf8");

  // Detect the package manager
  const packageManager = detectPackageManager();
  const dependencies = [
    "@react-native-community/netinfo",
    "react-native-unistyles",
    "@tanstack/react-query",
    "@tanstack/react-query-persist-client",
    "@tanstack/query-sync-storage-persister",
    "react-native-mmkv",
    "zustand",
    "axios",
    "react-native-svg",
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
    "i18next",
    "react-i18next",
    "react-native-vector-icons",
    "@react-navigation/native",
    "react-native-screens",
    "react-native-safe-area-context",
    "@react-navigation/native-stack",
    "date-fns",
    "lottie-react-native",
  ];
  const devDependencies = [
    "babel-plugin-module-resolver",
    "react-native-svg-transformer",
    "@types/react-native-vector-icons",
  ];

  // Run the installation
  packageInstaller(packageManager, dependencies);
  packageInstaller(packageManager, devDependencies, true);
  console.log(chalk.green("React Native project initialized successfully."));
  open(
    "https://github.com/AdityaTarale/rvelocity-cli/blob/main/REACTNATIVE_INIT.md"
  );
}

function initReactProject(projectRoot) {
  // Your logic for initializing a React project here
}
