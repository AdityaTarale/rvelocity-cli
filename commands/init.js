const fs = require("fs");
const path = require("path");

module.exports = function (args) {
  const isReactNative = args.includes("-rn");

  const projectRoot = path.join(process.cwd(), "src");

  if (fs.existsSync(projectRoot)) {
    console.log("Project already initialized.");
    return;
  }

  // Initialize for React or React Native based on the flag
  if (isReactNative) {
    initReactNativeProject(projectRoot);
  } else {
    initReactProject(projectRoot);
  }
};

function initReactProject(projectRoot) {
  fs.mkdirSync(projectRoot, { recursive: true });

  // Create default React folders and files
  fs.writeFileSync(
    path.join(projectRoot, "App.tsx"),
    reactAppTemplate(),
    "utf8"
  );
  fs.writeFileSync(
    path.join(projectRoot, "index.tsx"),
    reactIndexTemplate(),
    "utf8"
  );
  console.log("Initialized React project structure at", projectRoot);
}

function initReactNativeProject(projectRoot) {
  fs.mkdirSync(projectRoot, { recursive: true });

  // Create default React Native folders and files
  fs.writeFileSync(
    path.join(projectRoot, "App.tsx"),
    reactNativeAppTemplate(),
    "utf8"
  );
  console.log("Initialized React Native project structure at", projectRoot);
}

// React template
function reactAppTemplate() {
  return `
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to your React App</h1>
    </div>
  );
}

export default App;
`;
}

function reactIndexTemplate() {
  return `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
`;
}

// React Native template
function reactNativeAppTemplate() {
  return `
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to your React Native App</Text>
    </SafeAreaView>
  );
};

export default App;
`;
}
