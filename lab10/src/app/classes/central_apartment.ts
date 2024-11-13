import { Apartment } from "./apartment";

export class CentralApartment extends Apartment {
    location: string;

    constructor(name: string, pricePerSquareMeter: number, area: number, location: string) {
        super(name, pricePerSquareMeter, area);
        this.location = location;
    }

    override getPrice(): number {
        const basePrice = super.getPrice();
        return basePrice * 1.01;
    }
}

function calculatePrice(): void {
    const name: string = (document.getElementById("apartmentName") as HTMLInputElement).value;
    const pricePerSquareMeter: number = parseFloat((document.getElementById("pricePerSquareMeter") as HTMLInputElement).value);
    const area: number = parseFloat((document.getElementById("area") as HTMLInputElement).value);
    const location: string = (document.getElementById("location") as HTMLInputElement).value;

    let apartment: Apartment;

    if (location === "center") {
        apartment = new CentralApartment(name, pricePerSquareMeter, area, location);
    } else {
        apartment = new Apartment(name, pricePerSquareMeter, area);
    }

    const price: string = apartment.getPrice().toFixed(2);
    (document.getElementById("result") as HTMLElement).innerHTML = `Вартість квартири "${apartment.name}": ${price} грн`;
}