"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnergyMonitor {
    constructor(id, type, data) {
        this.id = id;
        this.type = type;
        this.data = data;
    }
    collectData(hvacSystem, lightingSystem) {
        this.data = hvacSystem.energyConsumption + lightingSystem.energyConsumption;
        console.log(`Data has been gathered and ready to be send.`);
        console.log(`Sending data. . .`);
        console.log(`Consumption energy ${this.sendData()}KW/h`);
    }
    sendData() {
        return this.data;
    }
}
exports.default = EnergyMonitor;
