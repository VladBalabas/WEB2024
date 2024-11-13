export class ArrayTwo {
    private array: number[][] = [];
  
    generateRandomArray(rows: number, cols: number): void {
      this.array = [];
      for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
          row.push(Math.floor(Math.random() * 10));
        }
        this.array.push(row);
      }
    }
  
    replaceElementsLessThanFive(): void {
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array[i].length; j++) {
          if (this.array[i][j] < 5) {
            this.array[i][j] = 111;
          }
        }
      }
    }
  
    getArray(): number[][] {
      return this.array;
    }
  }