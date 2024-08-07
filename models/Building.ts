import EnergyMonitor from "./EnergyMonitor";
import RenewableEnergySource from "./RenewableEnergySource";

class Building {
    id: number;
    name: string;
    location: string;
    energyConsumption: number;
    energyMonitor: EnergyMonitor;
    renewableEnergySource: RenewableEnergySource;

    constructor(id: number, name: string, location: string, energyConsumption: number) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.energyConsumption = energyConsumption;
    }

    monitorEnergy(): void {
        // Implement energy monitoring logic
    }
}
