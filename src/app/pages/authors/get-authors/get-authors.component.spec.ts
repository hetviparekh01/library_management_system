import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAuthorsComponent } from './get-authors.component';

describe('GetAuthorsComponent', () => {
  let component: GetAuthorsComponent;
  let fixture: ComponentFixture<GetAuthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAuthorsComponent]
    });
    fixture = TestBed.createComponent(GetAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
