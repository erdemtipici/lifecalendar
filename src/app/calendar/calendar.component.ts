import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalendarWeekComponent } from '../calendar-week/calendar-week.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ MatGridListModule, CalendarWeekComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  rows = new Array<number>(5);
  cols = new Array<number>(13);
}
