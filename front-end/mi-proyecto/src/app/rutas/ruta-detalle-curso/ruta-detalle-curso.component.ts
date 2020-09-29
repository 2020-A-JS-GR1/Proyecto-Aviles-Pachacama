import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../servicios/auth/auth.service";
import {CursoService} from "../../servicios/http/curso.service";

@Component({
  selector: 'app-ruta-detalle-curso',
  templateUrl: './ruta-detalle-curso.component.html',
  styleUrls: ['./ruta-detalle-curso.component.css']
})
export class RutaDetalleCursoComponent implements OnInit {
  cursosInscritos=[];
  id:number;
  mostrarFormulario = false;
  constructor(
    private readonly  _router: Router,
    private readonly  _cursoService: CursoService,
    private readonly _authService: AuthService
  ) { }

  filtrarUsuario() {
    this.id =Number(this._authService.usuariologin)
    const onservableTraerTodos = this._cursoService.obtenerTodosCursosPorId(this.id);
    onservableTraerTodos
      .subscribe(
        (usuario: any[]) => {
          this.cursosInscritos = usuario;
          this.llenarFormularioConDatosDeUsuario()
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }
  ngOnInit(): void {
    console.log(this.id)
    this.filtrarUsuario();
  }
  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true;
  }

  irAEditarcurso(id: number) {
    const ruta = ['/curso', 'editarcu', id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }
  eliminarCurso(id: number) {
    const obsEliminar = this._cursoService
      .eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          //borrar de la interfaz
          const indice = this.cursosInscritos
            .findIndex(u => u.id === id);
          this.cursosInscritos.splice(indice, 1);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

  calificarCurso(id: number) {
    const ruta = ['/curso', 'notascu', id]
    // /usuario/editar/1
    this._router.navigate(ruta);

  }
}
