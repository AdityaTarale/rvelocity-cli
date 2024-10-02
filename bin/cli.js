#!/usr/bin/env node
import { program } from "commander";
import initCommand from "../commands/init.js";
import generateCommand from "../commands/generate.js";

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

program.parse(process.argv);
