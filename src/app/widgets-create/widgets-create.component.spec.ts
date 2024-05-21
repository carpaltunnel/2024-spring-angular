import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsCreateComponent } from './widgets-create.component';

describe('WidgetsCreateComponent', () => {
  let component: WidgetsCreateComponent;
  let fixture: ComponentFixture<WidgetsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
