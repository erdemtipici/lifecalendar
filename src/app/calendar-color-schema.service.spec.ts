import { TestBed } from '@angular/core/testing';

import { CalendarColorSchemaService } from './calendar-color-schema.service';

describe('CalendarColorSchemaService', () => {
  let service: CalendarColorSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarColorSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
