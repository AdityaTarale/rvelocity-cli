#!/usr/bin/env node
const { program } = require("commander");
const initCommand = require("../commands/init");
const generateCommand = require("../commands/generate");

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
