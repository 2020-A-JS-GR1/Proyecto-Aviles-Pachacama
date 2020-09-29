import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNotasComponent } from './formulario-notas.component';

describe('FormularioNotasComponent', () => {
  let component: FormularioNotasComponent;
  let fixture: ComponentFixture<FormularioNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
