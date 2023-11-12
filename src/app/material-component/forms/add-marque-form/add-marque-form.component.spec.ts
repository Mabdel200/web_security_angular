import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarqueFormComponent } from './add-marque-form.component';

describe('AddMarqueFormComponent', () => {
  let component: AddMarqueFormComponent;
  let fixture: ComponentFixture<AddMarqueFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMarqueFormComponent]
    });
    fixture = TestBed.createComponent(AddMarqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
