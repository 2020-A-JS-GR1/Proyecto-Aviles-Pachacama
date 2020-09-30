import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCursoComponent } from './ruta-curso.component';

describe('RutaCursoComponent', () => {
  let component: RutaCursoComponent;
  let fixture: ComponentFixture<RutaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
