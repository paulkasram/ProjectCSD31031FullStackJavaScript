"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const energyUsageController_1 = __importDefault(require("./controllers/energyUsageController"));
"./controllers/energyUsageController";
// const building = objects.building;
// building.monitorEnergy();
const user = energyUsageController_1.default.user;
const centralManagementPlatform = energyUsageController_1.default.centralManagementPlatform;
const dataAnalysis = energyUsageController_1.default.dataAnalysis;
// let energyConsumption = building.energyMonitor.sendData();
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
    + "| Smart Campus Energy Management System |\n"
    + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
console.log(`${(_a = centralManagementPlatform.building) === null || _a === void 0 ? void 0 : _a.name} Building Energy Usage\n`);
user.viewUsage(centralManagementPlatform);
console.log(`Data has been received!\n`);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
    + "| Analysis of Energy Consumption Data   |\n"
    + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
dataAnalysis.analyzeData();
