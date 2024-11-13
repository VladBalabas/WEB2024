export class ArrayOne {
  numbers: number[] = [0, 0, 0, 0, 0];
  average: number = 0;

  updateNumbers(event: any, index: number): void {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      this.numbers[index] = value;
      this.calculateAverage();
    }
  }

  calculateAverage(): void {
    const sum = this.numbers.reduce((acc, curr) => acc + curr, 0);
    this.average = sum / this.numbers.length;
  }

  getNumbersString(): string {
    return this.numbers.join(', ');
  }
}
