const { execSync } = require("child_process");

// Function to install dependencies and devDependencies
function packageInstaller(packageManager, packages, isDev = false) {
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

  // Run the install command
  console.log(
    `Installing ${
      isDev ? "dev dependencies" : "dependencies"
    } with ${packageManager}...`
  );
  try {
    execSync(installCommand, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to install packages with ${packageManager}`);
    process.exit(1);
  }
}

module.exports = {
  packageInstaller,
};
