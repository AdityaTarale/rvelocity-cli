const fs = require("fs");
const path = require("path");

module.exports = function (args) {
  const isReactNative = args.includes("-rn");

  const projectRoot = path.join(process.cwd(), "src");

  if (fs.existsSync(projectRoot)) {
    console.log("Project already initialized.");
    return;
  }

  // Initialize for React or React Native based on the flag
  if (isReactNative) {
    initReactNativeProject(projectRoot);
  } else {
    initReactProject(projectRoot);
  }
};

function initReactProject(projectRoot) {}

function initReactNativeProject(projectRoot) {}
