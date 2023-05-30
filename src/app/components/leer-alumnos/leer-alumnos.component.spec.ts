import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerAlumnosComponent } from './leer-alumnos.component';

describe('LeerAlumnosComponent', () => {
  let component: LeerAlumnosComponent;
  let fixture: ComponentFixture<LeerAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeerAlumnosComponent]
    });
    fixture = TestBed.createComponent(LeerAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
