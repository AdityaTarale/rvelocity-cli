const fs = require("fs");
const path = require("path");
const {
  getComponentTemplate,
  getStylesTemplate,
  barrelTemplate,
} = require("../templates/generate-file");

module.exports = function (args) {
  const [folderName, componentName, platformFlag] = args;

  if (!folderName || !componentName) {
    console.error(
      "Please provide folder and component name: rc g <folder> <component> [-rn]"
    );
    process.exit(1);
  }

  const isReactNative = platformFlag === "-rn";

  // Define paths for the component, styles, and barrel files
  const componentDir = path.join(
    process.cwd(),
    "src",
    folderName,
    componentName
  );
  const componentFilePath = path.join(componentDir, `${componentName}.tsx`);
  const styleFilePath = path.join(
    componentDir,
    isReactNative ? "styles.ts" : "style.css"
  );
  const barrelFilePath = path.join(componentDir, "index.ts");

  // Create the component directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // Get the appropriate templates for the component and styles
  const componentTemplate = getComponentTemplate(componentName, isReactNative);
  const stylesTemplate = getStylesTemplate(componentName, isReactNative);
  const barrelTemplateContent = barrelTemplate(componentName);

  // Write the files: component, styles, and barrel
  fs.writeFileSync(componentFilePath, componentTemplate, "utf8");
  fs.writeFileSync(styleFilePath, stylesTemplate, "utf8");
  fs.writeFileSync(barrelFilePath, barrelTemplateContent, "utf8");

  // Console log success message
  console.log(
    `${componentName} component for ${
      isReactNative ? "React Native" : "ReactJS"
    } created successfully in ${folderName}/${componentName}.tsx`
  );
};
