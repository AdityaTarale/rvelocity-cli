#!/usr/bin/env node
import { program } from "commander";
import initCommand from "../commands/init.js";
import generateCommand from "../commands/generate.js";
import figlet from "figlet";
import open from "open";
import updateNotifier from "update-notifier";
import { createRequire } from "module";

// Dynamically import package.json using createRequire
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const notifier = updateNotifier({ pkg });

if (notifier.update) {
  notifier.notify();
}

figlet("Rvelocity CLI", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

program
  .command("init")
  .description("Initialize a new React or React Native project")
  .option("-rn, --react-native", "Initialize a React Native project")
  .action((options) => {
    const args = options.reactNative ? ["-rn"] : [];
    initCommand(args);
  });

program
  .command("g <folder> <component> [platform]")
  .description("Generate a new component for React or React Native")
  .action((folder, component, platform) => {
    const args = [folder, component, platform];
    generateCommand(args);
  });

program
  .command("docs")
  .description("Open CLI documentation")
  .action(() => {
    open("https://github.com/AdityaTarale/rvelocity-cli");
  });

program.parse(process.argv);
