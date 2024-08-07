import CentralManagementPlatform from "./CentralManagementPlatform";

class UserEngagement {
  id: number;
  userId: number;

  constructor(id: number, userId: number) {
    this.id = id;
    this.userId = userId;
  }

  viewUsage(CentralManagementPlatform: CentralManagementPlatform): void {
    console.log(`A request to view Energy Usage have been made. User ID: ${this.userId}`);
    
    CentralManagementPlatform.visualizeData()
  }
}

export default UserEngagement;
