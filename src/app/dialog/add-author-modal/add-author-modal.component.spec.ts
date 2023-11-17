import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorModalComponent } from './add-author-modal.component';

describe('AddAuthorModalComponent', () => {
  let component: AddAuthorModalComponent;
  let fixture: ComponentFixture<AddAuthorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAuthorModalComponent]
    });
    fixture = TestBed.createComponent(AddAuthorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
