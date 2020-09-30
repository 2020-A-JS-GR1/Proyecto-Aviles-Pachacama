import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasNotasUsuarioComponent } from './rutas-notas-usuario.component';

describe('RutasNotasUsuarioComponent', () => {
  let component: RutasNotasUsuarioComponent;
  let fixture: ComponentFixture<RutasNotasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasNotasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasNotasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
