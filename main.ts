
import objects from "./controllers/energyUsageController";"./controllers/energyUsageController";

// const building = objects.building;
// building.monitorEnergy();
const user = objects.user;
const centralManagementPlatform = objects.centralManagementPlatform;
const dataAnalysis = objects.dataAnalysis;

// let energyConsumption = building.energyMonitor.sendData();
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






