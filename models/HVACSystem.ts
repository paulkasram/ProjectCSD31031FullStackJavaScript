class HVACSystem {
    id: number;
    zone: string;
    temperature: number;
    status: string;

    constructor(id: number, zone: string, temperature: number, status: string) {
        this.id = id;
        this.zone = zone;
        this.temperature = temperature;
        this.status = status;
    }

    adjustTemperature(): void {
        // Implement temperature adjustment logic
    }

    scheduleMaintenance(): void {
        // Implement maintenance scheduling logic
    }
}