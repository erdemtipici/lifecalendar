import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalendarWeekComponent } from '../calendar-week/calendar-week.component';
import { CalendarSettingsService, CalendarSettings } from '../calendar-settings.service';
import { Subscription } from 'rxjs';
import { CalendarColorSchemaService, CalendarColorSchema } from '../calendar-color-schema.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ MatGridListModule, CalendarWeekComponent, NgStyle],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  currentColorSchema: CalendarColorSchema = new CalendarColorSchema();
  rows = new Array<number>(100);
  cols = new Array<number>(52);
  
  gridItemWidthDefault= 20;
  gridItemHeightDefault= 20;

  zoomFactor = 2;
  
  gridItemWidth = this.gridItemWidthDefault;
  gridItemHeight = this.gridItemHeightDefault;

  private subscription: Subscription;
  private calendarSettings: CalendarSettings = new CalendarSettings();

  constructor(private calendarSettingsService: CalendarSettingsService, private colorSchemaService: CalendarColorSchemaService) {
    this.subscription = this.calendarSettingsService.getSettings().subscribe(settings => {
      console.log("A new settings is received in calendar component");
    this.applySettings(settings);
    });

    this.colorSchemaService.getColorSchemaSubscription().subscribe(colorSchema => {
      this.currentColorSchema = colorSchema;
    });    
  }

  applySettings(settings: CalendarSettings) {
    this.calendarSettings = settings;

    //zoom 
    console.log("Zooming in.. New Zoom Level: " + this.calendarSettings.zoom)
    this.gridItemWidth = this.gridItemWidthDefault + (this.zoomFactor * this.calendarSettings.zoom);
    this.gridItemHeight = this.gridItemHeightDefault + (this.zoomFactor * this.calendarSettings.zoom);
    
  }

  
  
}
