class CentralManagementPlatform {
    id: number;
    dashboard: string;
    reports: string;
    alerts: string;

    constructor(id: number, dashboard: string, reports: string, alerts: string) {
        this.id = id;
        this.dashboard = dashboard;
        this.reports = reports;
        this.alerts = alerts;
    }

    visualizeData(buildingConsumption: number): void {
        console.log(`The energy consumption was ${buildingConsumption*100}%`);
    }

    forecastDemand(): void {
        // Implement demand forecasting logic
    }

    generateReports(): void {
        // Implement report generation logic
    }
}