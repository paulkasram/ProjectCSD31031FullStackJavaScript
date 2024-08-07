"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Building {
    constructor(id, name, location, energyConsumption, energyMonitor, renewableEnergySource, hvacSystem, lightingSystem) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.energyConsumption = energyConsumption;
        this.energyMonitor = energyMonitor;
        this.renewableEnergySource = renewableEnergySource;
        this.hvacSystem = hvacSystem;
        this.lightingSystem = lightingSystem;
    }
    monitorEnergy() {
        console.log(`Data is being gathering by ${this.name}. . .`);
        this.energyMonitor.collectData(this.hvacSystem, this.lightingSystem);
    }
}
exports.default = Building;
