import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarCursoComponent } from './ruta-editar-curso.component';

describe('RutaEditarCursoComponent', () => {
  let component: RutaEditarCursoComponent;
  let fixture: ComponentFixture<RutaEditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
