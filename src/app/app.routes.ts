import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CategoriesComponent } from './categories/categories.component';
import { PricingComponent } from './pricing/pricing.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: '', component: CalendarComponent },             // Home page
  { path: 'categories', component: CategoriesComponent },  // Categories page
  { path: 'pricing', component: PricingComponent },        // Pricing page
  { path: 'settings', component: SettingsComponent },      // Settings page
];
