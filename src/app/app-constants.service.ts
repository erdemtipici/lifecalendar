import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {
  readonly CALENDAR_COLS = 53
  readonly CALENDAR_ROWS = 101
  constructor() { }
}
