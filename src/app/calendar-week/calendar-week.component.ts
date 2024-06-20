import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-calendar-week',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './calendar-week.component.html',
  styleUrl: './calendar-week.component.css'
})
export class CalendarWeekComponent{
  @Input() weekno: number;

   constructor() { 
    // Constructor logic goes here 
    this.weekno = 1;
  } 
}
