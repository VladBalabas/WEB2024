import { Component } from '@angular/core';
import { ArrayOne } from '../classes/array_one';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  arrayOne: ArrayOne = new ArrayOne();

}
