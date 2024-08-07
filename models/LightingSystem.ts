class LightingSystem {
    id: number;
    area: string;
    lightLevel: number;
    status: string;
    energyConsumption: number;

    constructor(id: number, area: string, lightLevel: number, status: string, energyConsumption: number) {
        this.id = id;
        this.area = area;
        this.lightLevel = lightLevel;
        this.status = status;
        this.energyConsumption = energyConsumption;
    }

    adjustLighting(): void {
        // TODO
    }

    detectMotion(): void {
        // TODO
    }
}

export default LightingSystem;