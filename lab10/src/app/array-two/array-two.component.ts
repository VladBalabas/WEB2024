import { Component, OnInit } from '@angular/core';
import { ArrayTwo } from '../classes/array_two';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent implements OnInit {
  rows: number = 5;
  cols: number = 4;
  array: number[][] = [];
  manipulator: ArrayTwo = new ArrayTwo(); 
  constructor() {}

  ngOnInit(): void {
    this.generateArray();
  }
  
  generateArray(): void {
    this.manipulator.generateRandomArray(this.rows, this.cols);
    this.array = this.manipulator.getArray();
  }

  replaceElements(): void {
    this.manipulator.replaceElementsLessThanFive();
    this.array = this.manipulator.getArray();
  }
}
