import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-calendar-week',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './calendar-week.component.html',
  styleUrl: './calendar-week.component.css'
})
export class CalendarWeekComponent {

}
