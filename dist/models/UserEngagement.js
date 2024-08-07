"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEngagement {
    constructor(id, userId) {
        this.id = id;
        this.userId = userId;
    }
    viewUsage(CentralManagementPlatform) {
        console.log(`A request to view Energy Usage have been made. User ID: ${this.userId}`);
        CentralManagementPlatform.visualizeData();
    }
}
exports.default = UserEngagement;
