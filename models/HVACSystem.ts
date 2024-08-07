class HVACSystem {
    id: number;
    zone: string;
    temperature: number;
    status: string;
    energyConsumption: number;

    constructor(id: number, zone: string, temperature: number, status: string, energyConsumption: number) {
        this.id = id;
        this.zone = zone;
        this.temperature = temperature;
        this.status = status;
        this.energyConsumption = energyConsumption;
    }

    adjustTemperature(): void {
        // TODO
    }

    scheduleMaintenance(): void {
        // TODO
    }
}

export default HVACSystem;