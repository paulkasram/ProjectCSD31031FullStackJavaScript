import objects from "./controllers/energyUsageController";

const building = objects.building;
building.monitorEnergy();

let energyConsumption = building.energyMonitor.sendData();

console.log("Smart Campus Energy Management System");
console.log("Building Usage");

console.log(energyConsumption);




