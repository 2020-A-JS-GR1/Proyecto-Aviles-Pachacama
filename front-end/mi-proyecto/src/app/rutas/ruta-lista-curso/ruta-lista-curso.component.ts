import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-lista-curso',
  templateUrl: './ruta-lista-curso.component.html',
  styleUrls: ['./ruta-lista-curso.component.css']
})
export class RutaListaCursoComponent implements OnInit {

  arregloCursos = [];
  busquedaModelo = '';

  constructor( //inyecta dependencias
    private readonly _cursoService: CursoService,
    private readonly  _router: Router,
    readonly  _authService: AuthService
  ) {

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
          const indice = this.arregloCursos
            .findIndex(u => u.id === id);
          this.arregloCursos.splice(indice, 1);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

  filtrarArregloCurso() {
    const consulta = {
          nombrecurso: {
            contains: this.busquedaModelo
          }
        }
    const consultaString = 'where=' + JSON.stringify(consulta);

    const onservableTraerTodos = this._cursoService.traerTodosCurso(
      this.busquedaModelo != '' ? consultaString : '');
    onservableTraerTodos
      .subscribe(
        (cursos: any[]) => {
          this.arregloCursos = cursos;
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

  ngOnInit(): void {
    this.filtrarArregloCurso();
  }

  registrarCurso(curso:number) {
    const usuario:number = Number(this._authService.usuariologin);
    const consulta = {
      "usuario": usuario,
      "curso": curso
      }
    const consultaString = JSON.stringify(consulta);
   const obsregistro = this._cursoService.registrarCursos(consultaString);
   obsregistro
     .subscribe(
       (datos: Object)=>{
         const url = ['/curso','notas']
         this._router.navigate(url);
       },
       (error)=>{
         console.error('Error', error);
       }
     )
  }
}
