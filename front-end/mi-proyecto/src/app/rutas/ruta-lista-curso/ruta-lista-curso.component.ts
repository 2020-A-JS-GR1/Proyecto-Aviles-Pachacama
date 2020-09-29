import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";

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
    private readonly  _router: Router
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
      or: [
        {
          nombrecurso: {
            contains: this.busquedaModelo
          }
        },
        {
          nombremateria: {
            contains: this.busquedaModelo
          }
        }
      ]
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
}
