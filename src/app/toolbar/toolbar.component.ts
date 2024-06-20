import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CalendarSettingsService, CalendarSettings } from '../calendar-settings.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  private subscription: Subscription;
  private settings: CalendarSettings = new CalendarSettings();

  constructor(private calendarSettingsService: CalendarSettingsService) {
    this.subscription = this.calendarSettingsService.getSettings().subscribe(settings => {
      this.settings = settings;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
