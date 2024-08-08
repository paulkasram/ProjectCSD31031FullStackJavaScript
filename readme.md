# To download and test this package follow these steps:
## Step 1:
In your empty project folder create a new app.js file and copy the following:

```javascript
const objects = require('@alexander.gutierrez/smart-campus-energy-management-system');
const user = objects.default.user;
const centralManagementPlatform = objects.default.centralManagementPlatform;
const dataAnalysis = objects.default.dataAnalysis;
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
           +"| Smart Campus Energy Management System |\n"
           +"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
console.log(`${centralManagementPlatform.building?.name} Building Energy Usage\n`);
user.viewUsage(centralManagementPlatform);
console.log(`Data has been received!\n`);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
           +"| Analysis of Energy Consumption Data   |\n"
           +"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
dataAnalysis.analyzeData();
```

### Step 2:
In the terminal, run: "npm init -y" to create the package.json.

### Step 3:
To install the package, rum this in the terminal:
(bash) run: npm i @alexander.gutierrez/smart-campus-energy-management-system

### Step 4:
Run the app.js file recently created. 