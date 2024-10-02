import fs from "fs";
import path from "path";
import chalk from "chalk";

export default function (args) {
  const [folderName, componentName, platformFlag] = args;

  if (!folderName || !componentName) {
    console.error(
      "Please provide folder and component name: rc g <folder> <component> [-rn]"
    );
    process.exit(1);
  }

  const isReactNative = platformFlag === "-rn";

  const componentDir = path.join(
    process.cwd(),
    "src",
    folderName,
    componentName
  );
  const componentFilePath = path.join(componentDir, `${componentName}.tsx`);
  const styleFilePath = path.join(
    componentDir,
    isReactNative ? "styles.ts" : "styles.css"
  );
  const barrelFilePath = path.join(componentDir, "index.ts");

  // Create the component directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // Read template files based on platform
  const templateDir = path.join(__dirname, "..", "templates");
  const componentTemplatePath = path.join(
    templateDir,
    isReactNative ? "react-native.tsx" : "react.tsx"
  );
  const stylesTemplatePath = path.join(
    templateDir,
    isReactNative ? "styles.ts" : "styles.css"
  );

  // Read template content
  const componentTemplate = fs.readFileSync(componentTemplatePath, "utf8");
  const stylesTemplate = fs.readFileSync(stylesTemplatePath, "utf8");

  // Replace placeholder in templates
  const componentContent = componentTemplate.replace(
    /__COMPONENT_NAME__/g,
    componentName
  );
  const stylesContent = stylesTemplate.replace(
    /__COMPONENT_NAME__/g,
    componentName
  );

  // Barrel template
  const barrelContent = `export { default } from './${componentName}';`;

  // Write files to disk
  fs.writeFileSync(componentFilePath, componentContent, "utf8");
  fs.writeFileSync(styleFilePath, stylesContent, "utf8");
  fs.writeFileSync(barrelFilePath, barrelContent, "utf8");

  // Log success message
  console.log(
    chalk.green(
      `${componentName} component for ${
        isReactNative ? "React Native" : "ReactJS"
      } created successfully in ${folderName}/${componentName}.tsx`
    )
  );
}
