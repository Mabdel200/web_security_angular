import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorieFormComponent } from './add-categorie-form.component';

describe('AddCategorieFormComponent', () => {
  let component: AddCategorieFormComponent;
  let fixture: ComponentFixture<AddCategorieFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategorieFormComponent]
    });
    fixture = TestBed.createComponent(AddCategorieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
