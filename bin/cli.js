#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const [command, folderName, componentName, platformFlag] =
  process.argv.slice(2);

if (command !== "g") {
  console.error(
    "Invalid command: " + command,
    "Use rc g <folder> <component> [-rn]"
  );
  process.exit(1);
}

if (!folderName || !componentName) {
  console.error(
    "Please provide folder and component name: rc g <folder> <component> [-rn]"
  );
  process.exit(1);
}

const isReactNative = platformFlag === "-rn";

const componentDir = path.join(process.cwd(), "src", folderName, componentName);
const componentFilePath = path.join(componentDir, `${componentName}.tsx`);
const styleFilePath = path.join(
  componentDir,
  isReactNative ? "styles.ts" : "style.css"
);
const barrelFilePath = path.join(componentDir, "index.ts");

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// Create the component file
const componentTemplate = `
import React from 'react';
${
  isReactNative
    ? `import { View, Text } from 'react-native';\nimport styles from './styles';`
    : `import './styles.css';`
}

type ${componentName}Props = {
  // Define props here
};

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    ${
      isReactNative
        ? `<View style={styles.container}><Text>${componentName} Component</Text></View>`
        : `<div><h1>${componentName} Component</h1></div>`
    }
  );
};

export default ${componentName};
`;

const stylesTemplate = isReactNative
  ? `import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
`
  : `.${componentName.toLowerCase()} {
  /* Add styles here */
}
`;

const barrelTemplate = `export { default } from './${componentName}';`;

fs.writeFileSync(componentFilePath, componentTemplate, "utf8");
fs.writeFileSync(styleFilePath, stylesTemplate, "utf8");
fs.writeFileSync(barrelFilePath, barrelTemplate, "utf8");

console.log(
  `${componentName} component for ${
    isReactNative ? "React Native" : "ReactJS"
  } created successfully in ${folderName}/${componentName}.tsx`
);
