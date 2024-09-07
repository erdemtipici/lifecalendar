import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {  
  readonly CALENDAR_COLS = 53
  readonly CALENDAR_ROWS = 101
  readonly GRIDITEMS_WIDTH = 15
  readonly GRIDITEMS_HEIGHT = 15
  
  constructor() { }
}
