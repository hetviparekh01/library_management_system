import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfilterationComponent } from './customfilteration.component';

describe('CustomfilterationComponent', () => {
  let component: CustomfilterationComponent;
  let fixture: ComponentFixture<CustomfilterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomfilterationComponent]
    });
    fixture = TestBed.createComponent(CustomfilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
