import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CalendarSettingsService, CalendarSettings } from '../calendar-settings.service';
import { Subscription } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarColorSchemaService } from '../calendar-color-schema.service';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  private subscription: Subscription;
  private settings: CalendarSettings = new CalendarSettings();
  private colorSchemaService : CalendarColorSchemaService;

  constructor(private calendarSettingsService: CalendarSettingsService, private colorSchemaService_i: CalendarColorSchemaService) {
    this.subscription = this.calendarSettingsService.getSettings().subscribe(settings => {
      this.settings = settings;
    });

    this.colorSchemaService = colorSchemaService_i;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  activateColorSchemaAge() {
    this.colorSchemaService.activateColorSchemaForAge();
  }

  resetView() {
    this.colorSchemaService.activateColorSchemaDefault();
  }

  zoomIn() {
    if (this.settings.zoom < 10) {
      this.settings.zoom++;
      this.calendarSettingsService.updateSettings(this.settings);    
    }
  }

  zoomOut() {
    if (this.settings.zoom >= -10) {
      this.settings.zoom--;
      this.calendarSettingsService.updateSettings(this.settings);    
    }    
  } 

  zoomReset() {
    this.settings.zoom = 0;
    this.calendarSettingsService.updateSettings(this.settings);    
  }
}
