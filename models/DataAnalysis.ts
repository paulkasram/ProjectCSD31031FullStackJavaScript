class DataAnalysis {
  id: number;
  historicalData: string;
  patterns: string;

  constructor(id: number, historicalData: string, patterns: string) {
    this.id = id;
    this.historicalData = historicalData;
    this.patterns = patterns;
  }

  analyzeData(): void {
    console.log("Data Analysis in progress. . .");
    console.log("This might take several minutes");
    
    console.log("Analysis resuts:");
    
    console.log(`1. Cleaning or replacing HVAC filters`);    
    console.log(`2. Adjusting lighting, heating, and cooling based on occupancy and time of day.\n`);
    console.log(`Adjustments will reduce costs and improve equipment performance.`);

    console.log(`Data Analysis successful.`);    
  }

  detectAnomalies(): void {
    // Todo
  }
}

export default DataAnalysis;