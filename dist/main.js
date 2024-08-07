"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const energyUsageController_1 = __importDefault(require("./controllers/energyUsageController"));
const building = energyUsageController_1.default.building;
building.monitorEnergy();
let energyConsumption = building.energyMonitor.sendData();
console.log("Smart Campus Energy Management System");
console.log("Building Usage");
console.log(energyConsumption);
