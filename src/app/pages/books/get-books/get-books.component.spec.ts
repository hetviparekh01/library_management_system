import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBooksComponent } from './get-books.component';

describe('GetBooksComponent', () => {
  let component: GetBooksComponent;
  let fixture: ComponentFixture<GetBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetBooksComponent]
    });
    fixture = TestBed.createComponent(GetBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
