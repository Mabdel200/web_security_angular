import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CustomerComponent } from './responsable-.component';
import { ResponsableComponent } from './responsable.component';

describe('ResponsableComponent', () => {
  let component: ResponsableComponent;
  let fixture: ComponentFixture<ResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableComponent]
    });
    fixture = TestBed.createComponent(ResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
