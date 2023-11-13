import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRevendeurComponent } from './sidebar-revendeur.component';

describe('SidebarRevendeurComponent', () => {
  let component: SidebarRevendeurComponent;
  let fixture: ComponentFixture<SidebarRevendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarRevendeurComponent]
    });
    fixture = TestBed.createComponent(SidebarRevendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
