import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNotasCursoComponent } from './ruta-notas-curso.component';

describe('RutaNotasCursoComponent', () => {
  let component: RutaNotasCursoComponent;
  let fixture: ComponentFixture<RutaNotasCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNotasCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNotasCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
