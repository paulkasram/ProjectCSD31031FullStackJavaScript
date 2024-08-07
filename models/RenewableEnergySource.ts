class RenewableEnergySource {
    id: number;
    type: string;
    output: number;
    storage: number;
    energyGeneration: number;

    constructor(id: number, type: string, output: number, storage: number, energyGeneration: number) {
        this.id = id;
        this.type = type;
        this.output = output;
        this.storage = storage;
        this.energyGeneration = energyGeneration;
    }

    monitorOutput(): void {
        // TODO
    }

    storeEnergy(): void {
        // TODO
    }
}

export default RenewableEnergySource;