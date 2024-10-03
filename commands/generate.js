import fs from "fs";
import path, { dirname } from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function (args) {
  const [folder, component, platform] = args;

  if (!folder || !component) {
    console.error(
      "Please provide folder and component name: rc g <folder> <component> [-rn]"
    );
    process.exit(1);
  }

  const isReactNative = platform === "react-native";

  const componentDir = path.join(process.cwd(), "src", folder, component);
  const componentFilePath = path.join(componentDir, `${component}.tsx`);
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
    component
  );
  const stylesContent = stylesTemplate.replace(
    /__COMPONENT_NAME__/g,
    component
  );

  // Barrel template
  const barrelContent = `export { default } from './${component}';`;

  // Write files to disk
  fs.writeFileSync(componentFilePath, componentContent, "utf8");
  fs.writeFileSync(styleFilePath, stylesContent, "utf8");
  fs.writeFileSync(barrelFilePath, barrelContent, "utf8");

  // Log success message
  console.log(
    chalk.green(
      `${component} component for ${
        isReactNative ? "React Native" : "ReactJS"
      } created successfully in ${folder}/${component}.tsx`
    )
  );
}
