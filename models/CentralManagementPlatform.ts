import Building from "./Building";

class CentralManagementPlatform {
    id: number;
    dashboard: string;
    reports: string;
    alerts: string;
    building: Building | undefined;

    constructor(id: number, dashboard: string, reports: string, alerts: string, building: Building) {
        this.id = id;
        this.dashboard = dashboard;
        this.reports = reports;
        this.alerts = alerts;
        this.building = building;
    }

    visualizeData(): void {
        console.log(`Requesting data to ${this.building?.name} from Central Manager Platform.`)
        this.building?.monitorEnergy();
    }

    forecastDemand(): void {
        // TODO
    }

    generateReports(): void {
        // TODO
    }
}

export default CentralManagementPlatform;