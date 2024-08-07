import EnergyMonitor from "./EnergyMonitor";
import RenewableEnergySource from "./RenewableEnergySource";
import HVACSystem from "./HVACSystem";
import LightingSystem from "./LightingSystem";

class Building {
    id: number;
    name: string;
    location: string;
    energyConsumption: number;
    energyMonitor: EnergyMonitor;
    renewableEnergySource: RenewableEnergySource;
    hvacSystem: HVACSystem;
    lightingSystem: LightingSystem;

    constructor(id: number, name: string, location: string, energyConsumption: number, energyMonitor: EnergyMonitor,
        renewableEnergySource: RenewableEnergySource, hvacSystem: HVACSystem, lightingSystem: LightingSystem) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.energyConsumption = energyConsumption;
        this.energyMonitor = energyMonitor;
        this.renewableEnergySource = renewableEnergySource;
        this.hvacSystem = hvacSystem;
        this.lightingSystem = lightingSystem;
    }

    monitorEnergy(): void {
        this.energyMonitor.collectData(this.hvacSystem, this.lightingSystem);
    }
}

export default Building;