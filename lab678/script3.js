class Apartment {
    constructor(name, pricePerSquareMeter, area) {
        this.name = name;
        this.pricePerSquareMeter = pricePerSquareMeter;
        this.area = area;
    }

    getPrice() {
        return this.pricePerSquareMeter * this.area;
    }
}

class CentralApartment extends Apartment {
    constructor(name, pricePerSquareMeter, area, location) {
        super(name, pricePerSquareMeter, area);
        this.location = location;
    }

    getPrice() {
        const basePrice = super.getPrice();
        return basePrice * 1.01; 
    }
}

function calculatePrice() {
    const name = document.getElementById("apartmentName").value;
    const pricePerSquareMeter = parseFloat(document.getElementById("pricePerSquareMeter").value);
    const area = parseFloat(document.getElementById("area").value);
    const location = document.getElementById("location").value;

    let apartment;

    if (location === "center") {
        apartment = new CentralApartment(name, pricePerSquareMeter, area, location);
    } else {
        apartment = new Apartment(name, pricePerSquareMeter, area);
    }

    const price = apartment.getPrice().toFixed(2);
    document.getElementById("result").innerHTML = `Вартість квартири "${apartment.name}": ${price} грн`;
}
