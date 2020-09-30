import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMateriaComponent } from './formulario-materia.component';

describe('FormularioMateriaComponent', () => {
  let component: FormularioMateriaComponent;
  let fixture: ComponentFixture<FormularioMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
