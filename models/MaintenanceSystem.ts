class MaintenanceSystem {
  id: number;
  equipmentStatus: string;
  schedule: string;

  constructor(id: number, equipmentStatus: string, schedule: string) {
    this.id = id;
    this.equipmentStatus = equipmentStatus;
    this.schedule = schedule;
  }

  monitorEquipment(): void {
    // TODO
  }

  scheduleMaintenance(): void {
    // TODO
  }
}
