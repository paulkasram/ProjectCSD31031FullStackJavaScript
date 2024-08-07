import HVACSystem from "./HVACSystem";
import LightingSystem from "./LightingSystem";

class EnergyMonitor {
  id: number;
  type: string;
  data: number;

  constructor(id: number, type: string, data: number) {
    this.id = id;
    this.type = type;
    this.data = data;
  }

  collectData(hvacSystem: HVACSystem, lightingSystem: LightingSystem): void {
    this.data = hvacSystem.energyConsumption + lightingSystem.energyConsumption;
   
   console.log(`Data has been gathered and ready to be send.`);
   console.log(`Sending data. . .`);
   console.log(`Consumption energy ${ this.sendData() }KW/h`);
  }

  sendData(): number {
    return this.data;
  }
}

export default EnergyMonitor;
