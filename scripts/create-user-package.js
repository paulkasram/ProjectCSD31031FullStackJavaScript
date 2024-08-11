const fs = require("fs");
const path = require("path");

const userPackageJsonPath = path.join(process.cwd(), "package.json");
const packageJsonContent = {
  name: "user-project",
  version: "1.0.0",
  description: "User's project to run smart-campus-energy-management-system",
  scripts: {
    start: "npm run start-system",
    "start-system":
      "node ./node_modules/@paulaksram/smart-campus-energy-management-system/dist/main.js",
  },
  dependencies: {
    "@paulaksram/smart-campus-energy-management-system": "^2.0.0",
  },
};

// Check if package.json already exists
if (!fs.existsSync(userPackageJsonPath)) {
  // Write the package.json file to the user's directory
  fs.writeFileSync(
    userPackageJsonPath,
    JSON.stringify(packageJsonContent, null, 2)
  );
  console.log("package.json created successfully.");
} else {
  console.log("package.json already exists. Skipping creation.");
}
