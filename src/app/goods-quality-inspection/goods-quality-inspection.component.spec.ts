import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsQualityInspectionComponent } from './goods-quality-inspection.component';

describe('GoodsQualityInspectionComponent', () => {
  let component: GoodsQualityInspectionComponent;
  let fixture: ComponentFixture<GoodsQualityInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsQualityInspectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodsQualityInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
