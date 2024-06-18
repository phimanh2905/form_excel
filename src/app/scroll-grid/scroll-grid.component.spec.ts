import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollGridComponent } from './scroll-grid.component';

describe('ScrollGridComponent', () => {
  let component: ScrollGridComponent;
  let fixture: ComponentFixture<ScrollGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
