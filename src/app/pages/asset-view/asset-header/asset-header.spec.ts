import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetHeader } from './asset-header';

describe('AssetHeader', () => {
  let component: AssetHeader;
  let fixture: ComponentFixture<AssetHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
