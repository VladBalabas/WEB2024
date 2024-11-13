import { Component } from '@angular/core';
import { Apartment } from '../classes/apartment';
import { CentralApartment } from '../classes/central_apartment';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  result: string = '';

  calculatePrice(): void {
    try {
      const name: string = (document.getElementById("apartmentName") as HTMLInputElement).value;
      const pricePerSquareMeter: number = parseFloat((document.getElementById("pricePerSquareMeter") as HTMLInputElement).value);
      const area: number = parseFloat((document.getElementById("area") as HTMLInputElement).value);
      const location: string = (document.getElementById("location") as HTMLInputElement).value;

      if (isNaN(pricePerSquareMeter) || isNaN(area)) {
        throw new Error("Некоректне значення для ціни за квадратний метр або площі.");
      }

      let apartment: Apartment;

      if (location === "center") {
        apartment = new CentralApartment(name, pricePerSquareMeter, area, location);
      } else {
        apartment = new Apartment(name, pricePerSquareMeter, area);
      }

      const price: string = apartment.getPrice().toFixed(2);
      this.result = `Вартість квартири "${apartment.name}": ${price} грн`;
    } catch (error) {
      console.error("Помилка під час обчислення ціни:", error);
      this.result = "Виникла помилка під час обчислення ціни. Перевірте введені дані.";
    }
  }
}
