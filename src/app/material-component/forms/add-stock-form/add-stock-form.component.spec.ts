import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockFormComponent } from './add-stock-form.component';

describe('AddStockFormComponent', () => {
  let component: AddStockFormComponent;
  let fixture: ComponentFixture<AddStockFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStockFormComponent]
    });
    fixture = TestBed.createComponent(AddStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
