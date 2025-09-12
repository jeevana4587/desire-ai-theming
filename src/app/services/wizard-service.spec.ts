import { TestBed } from '@angular/core/testing';

import { WizardService } from './wizard-service';

describe('WizardState', () => {
  let service: WizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
