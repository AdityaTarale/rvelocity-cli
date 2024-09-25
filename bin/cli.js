#!/usr/bin/env node
const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "g":
    require("../commands/generate")(args);
    break;
  case "init":
    require("../commands/init")(args);
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.log("Available commands: rc g, rc init [-rn]");
    process.exit(1);
}
