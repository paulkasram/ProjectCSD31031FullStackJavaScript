"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HVACSystem {
    constructor(id, zone, temperature, status, energyConsumption) {
        this.id = id;
        this.zone = zone;
        this.temperature = temperature;
        this.status = status;
        this.energyConsumption = energyConsumption;
    }
    adjustTemperature() {
        // Implement temperature adjustment logic
    }
    scheduleMaintenance() {
        // Implement maintenance scheduling logic
    }
}
exports.default = HVACSystem;
