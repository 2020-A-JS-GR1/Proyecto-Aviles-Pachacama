import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetalleCursoComponent } from './ruta-detalle-curso.component';

describe('RutaDetalleCursoComponent', () => {
  let component: RutaDetalleCursoComponent;
  let fixture: ComponentFixture<RutaDetalleCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDetalleCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetalleCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
