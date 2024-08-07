import Building from "../models/Building";
import EnergyMonitor from "../models/EnergyMonitor";
import RenewableEnergySource from "../models/RenewableEnergySource";
import HVACSystem from "../models/HVACSystem";
import LightingSystem from "../models/LightingSystem";

const energyMonitor = new EnergyMonitor(1000, "Hydro", 0);
const renewableEnergySource = new RenewableEnergySource(1000, "Solar", 120, 6000, 1000);
const hvacSystem = new HVACSystem(1000, "Class rooms", 21, "on", 300);
const lightingSystem = new LightingSystem(1000, "Class rooms", 7, "on", 50);

const building = new Building (1234, "Main Campus", "271 Yorkdale Blvd", 0,
                               energyMonitor, renewableEnergySource, hvacSystem, lightingSystem);




const objects = {building};
export default objects;