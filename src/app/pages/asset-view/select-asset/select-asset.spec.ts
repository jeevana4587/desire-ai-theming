import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAsset } from './select-asset';

describe('SelectAsset', () => {
  let component: SelectAsset;
  let fixture: ComponentFixture<SelectAsset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAsset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAsset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
