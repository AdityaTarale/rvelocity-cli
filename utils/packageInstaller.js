import chalk from "chalk";
import { execSync } from "child_process";

export function packageInstaller(packageManager, packages, isDev = false) {
  let installCommand;

  switch (packageManager) {
    case "npm":
      installCommand = `npm install ${packages.join(" ")}${
        isDev ? " --save-dev" : ""
      }`;
      break;
    case "yarn":
      installCommand = `yarn add ${packages.join(" ")}${isDev ? " -D" : ""}`;
      break;
    case "pnpm":
      installCommand = `pnpm add ${packages.join(" ")}${isDev ? " -D" : ""}`;
      break;
    default:
      console.error("Unsupported package manager.");
      process.exit(1);
  }

  console.log(
    chalk.blue(
      `Installing ${
        isDev ? "dev dependencies" : "dependencies"
      } with ${packageManager}...`
    )
  );
  try {
    execSync(installCommand, { stdio: "inherit" });
  } catch {
    console.log(
      chalk.red.bold(`Failed to install packages with ${packageManager}`)
    );
    process.exit(1);
  }
}
