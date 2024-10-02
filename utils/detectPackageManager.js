import fs from "fs";
import path from "path";

export function detectPackageManager() {
  if (fs.existsSync(path.join(process.cwd(), "yarn.lock"))) {
    return "yarn";
  } else if (fs.existsSync(path.join(process.cwd(), "pnpm-lock.yaml"))) {
    return "pnpm";
  } else if (fs.existsSync(path.join(process.cwd(), "package-lock.json"))) {
    return "npm";
  } else {
    return "yarn";
  }
}
