import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalendarWeekBoxComponent } from '../calendar-week-box/calendar-week-box.component';
import { CalendarSettingsService, CalendarSettings } from '../calendar-settings.service';
import { Subscription } from 'rxjs';
import { CalendarColorSchemaService, CalendarColorSchema } from '../calendar-color-schema.service';
import { AppConstantsService } from '../app-constants.service';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "../toolbar/toolbar.component";


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatGridListModule, CalendarWeekBoxComponent, NgStyle, CommonModule, ToolbarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  currentColorSchema: CalendarColorSchema = new CalendarColorSchema(this.appConstants);
  rows = new Array<number>(this.appConstants.CALENDAR_ROWS);
  cols = new Array<number>(this.appConstants.CALENDAR_COLS);
  
  gridItemWidthDefault= this.appConstants.GRIDITEMS_WIDTH;
  gridItemHeightDefault= this.appConstants.GRIDITEMS_HEIGHT;

  zoomFactor = 2;
  
  gridItemWidth = this.gridItemWidthDefault;
  gridItemHeight = this.gridItemHeightDefault;

  private subscription: Subscription;
  private calendarSettings: CalendarSettings = new CalendarSettings();

  constructor(private appConstants: AppConstantsService, private calendarSettingsService: CalendarSettingsService, private colorSchemaService: CalendarColorSchemaService) {
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
