import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarNotasComponent } from './ruta-editar-notas.component';

describe('RutaEditarNotasComponent', () => {
  let component: RutaEditarNotasComponent;
  let fixture: ComponentFixture<RutaEditarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
