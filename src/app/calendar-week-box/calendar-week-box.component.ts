import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-calendar-week-box',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './calendar-week-box.component.html',
  styleUrl: './calendar-week-box.component.css'
})
export class CalendarWeekBoxComponent{
  @Input() weekno: number;

   constructor() { 
    // Constructor logic goes here 
    this.weekno = 1;
  } 
}
