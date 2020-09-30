import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearCursoComponent } from './ruta-crear-curso.component';

describe('RutaCrearCursoComponent', () => {
  let component: RutaCrearCursoComponent;
  let fixture: ComponentFixture<RutaCrearCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
