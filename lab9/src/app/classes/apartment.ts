export class Apartment {
    name: string;
    pricePerSquareMeter: number;
    area: number;

    constructor(name: string, pricePerSquareMeter: number, area: number) {
        this.name = name;
        this.pricePerSquareMeter = pricePerSquareMeter;
        this.area = area;
    }

    getPrice(): number {
        return this.pricePerSquareMeter * this.area;
    }
}