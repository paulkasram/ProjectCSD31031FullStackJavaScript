"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CentralManagementPlatform {
    constructor(id, dashboard, reports, alerts, building) {
        this.id = id;
        this.dashboard = dashboard;
        this.reports = reports;
        this.alerts = alerts;
        this.building = building;
    }
    visualizeData() {
        var _a, _b;
        console.log(`Requesting data to ${(_a = this.building) === null || _a === void 0 ? void 0 : _a.name} from Central Manager Platform.`);
        (_b = this.building) === null || _b === void 0 ? void 0 : _b.monitorEnergy();
    }
    forecastDemand() {
        // TODO
    }
    generateReports() {
        // TODO
    }
}
exports.default = CentralManagementPlatform;
