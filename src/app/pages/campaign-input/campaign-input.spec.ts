import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInput } from './campaign-input';

describe('CampaignInput', () => {
  let component: CampaignInput;
  let fixture: ComponentFixture<CampaignInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
