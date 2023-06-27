import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonsComponent } from './add-edit-persons.component';

describe('AddEditPersonsComponent', () => {
  let component: AddEditPersonsComponent;
  let fixture: ComponentFixture<AddEditPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPersonsComponent]
    });
    fixture = TestBed.createComponent(AddEditPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
