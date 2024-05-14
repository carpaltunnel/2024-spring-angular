import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDetailComponent } from './widget-detail.component';

describe('WidgetDetailComponent', () => {
  let component: WidgetDetailComponent;
  let fixture: ComponentFixture<WidgetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
