import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearMateriaComponent } from './ruta-crear-materia.component';

describe('RutaCrearMateriaComponent', () => {
  let component: RutaCrearMateriaComponent;
  let fixture: ComponentFixture<RutaCrearMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
