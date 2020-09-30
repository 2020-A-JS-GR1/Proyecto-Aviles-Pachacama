import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaCursoComponent } from './ruta-lista-curso.component';

describe('RutaListaCursoComponent', () => {
  let component: RutaListaCursoComponent;
  let fixture: ComponentFixture<RutaListaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
