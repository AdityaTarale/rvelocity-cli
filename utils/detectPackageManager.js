const fs = require("fs");
const path = require("path");

function detectPackageManager() {
  if (fs.existsSync(path.join(process.cwd(), "yarn.lock"))) {
    return "yarn";
  } else if (fs.existsSync(path.join(process.cwd(), "pnpm-lock.yaml"))) {
    return "pnpm";
  } else if (fs.existsSync(path.join(process.cwd(), "package-lock.json"))) {
    return "npm";
  } else {
    //   If no lock file exists, assume it will be installed via yarn
    return "yarn";
  }
}

module.exports = {
  detectPackageManager,
};
