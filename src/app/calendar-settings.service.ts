import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class CalendarSettings {
  zoom: number;

  constructor() {
    this.zoom = 1;  
  }
}

@Injectable({
  providedIn: 'root'
})
export class CalendarSettingsService {
  private currentSettings: CalendarSettings = new CalendarSettings();

  private calendarSettingsSubject = new BehaviorSubject<CalendarSettings>(this.currentSettings);
  getSettings() {
    return this.calendarSettingsSubject.asObservable();
  }
  
  updateSettings(settings: CalendarSettings) {
    this.currentSettings = settings;
    this.calendarSettingsSubject.next(settings);
  }

  constructor() { }
}
