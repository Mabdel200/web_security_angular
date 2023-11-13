import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRevendeurComponent } from './header-revendeur.component';

describe('HeaderRevendeurComponent', () => {
  let component: HeaderRevendeurComponent;
  let fixture: ComponentFixture<HeaderRevendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderRevendeurComponent]
    });
    fixture = TestBed.createComponent(HeaderRevendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
