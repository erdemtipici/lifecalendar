import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConstantsService } from './app-constants.service';

export class CalendarColorSchema {
  colors: string[][] = []; // Initialize 'colors' property as an empty array

  constructor(private appConstants: AppConstantsService) { 
    for (let i = 0; i < this.appConstants.CALENDAR_ROWS; i++) {
      this.colors[i] = [];
      for (let j = 0; j < this.appConstants.CALENDAR_COLS; j++) {
        this.colors[i][j] = '#FFFFFF';
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class CalendarColorSchemaService {
  private currentSchema: CalendarColorSchema = new CalendarColorSchema(this.appConstants);
  private colorSchemaSubject = new BehaviorSubject<CalendarColorSchema>(this.currentSchema);
  
  constructor(private appConstants: AppConstantsService) { 
      // current active schema is age based color schema
    this.activateColorSchemaDefault();
  }
  
  getColorSchemaSubscription() {
    return this.colorSchemaSubject.asObservable();
  }

  activateColorSchemaDefault() {
    let schema = new CalendarColorSchema(this.appConstants);

    for (let i = 0; i < this.appConstants.CALENDAR_ROWS; i++) {
      schema.colors[i] = [];
      for (let j = 0; j < this.appConstants.CALENDAR_COLS; j++) {
        schema.colors[i][j] = '#FFFFFF';
      }
    }

    this.updateSchema(schema);
  }

  activateColorSchemaForAge() {
    let schema = new CalendarColorSchema(this.appConstants);
    
    for (let i = 0; i < this.appConstants.CALENDAR_ROWS; i++) {
      schema.colors[i] = [];
      for (let j = 0; j < this.appConstants.CALENDAR_COLS; j++) {

        // first 12 years is blue
        if (i < 12) {
          schema.colors[i][j] = '#0000FF';
        }

        // next 6 years is green
        else if (i < 18) {
          schema.colors[i][j] = '#00FF00';
        }

        // next 10 years is yellow
        else if (i < 28) {
          schema.colors[i][j] = '#FFFF00';
        }

        // next 12 years is orange
        else if (i < 40) {
          schema.colors[i][j] = '#FFA500';
        }

        // next 12 years is red
        else if (i < 52) {
          schema.colors[i][j] = '#FF0000';
        }
        // next 12 years is red
        else if (i < 64) {
          schema.colors[i][j] = '#FF2200';
        }
        // next 16 years is red
        else if (i < 80) {
          schema.colors[i][j] = '#FF4400';
        }
        //else is white
        else {
          schema.colors[i][j] = '#00FFFF';
        }
      }
    }

    this.updateSchema(schema);
  }

  updateSchema(schema: CalendarColorSchema) {
    this.currentSchema = schema;
    this.colorSchemaSubject.next(this.currentSchema);
  }

  getColorSchema() {
    return this.currentSchema;
  }
}
