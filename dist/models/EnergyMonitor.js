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
    }
    sendData() {
        return this.data;
    }
}
exports.default = EnergyMonitor;
