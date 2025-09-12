import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTheme } from './select-theme';

describe('SelectTheme', () => {
  let component: SelectTheme;
  let fixture: ComponentFixture<SelectTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
