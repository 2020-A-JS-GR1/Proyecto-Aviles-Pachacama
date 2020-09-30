import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-rutas-notas-usuario',
  templateUrl: './rutas-notas-usuario.component.html',
  styleUrls: ['./rutas-notas-usuario.component.css']
})
export class RutasNotasUsuarioComponent implements OnInit {


  arregloCursos=[];
  busquedaModelo = '';
  constructor(
    private readonly  _router: Router,
    private readonly  _cursoService: CursoService,
    private readonly _authService: AuthService,
    private readonly _activateRouter: ActivatedRoute
  ) { }

  filtrarArregloCurso() {
    const consulta = {
      or: [
        {
          observaciones: {
            contains: this.busquedaModelo
          }
        }
      ]
    }
    const consultaString = 'where=' + JSON.stringify(consulta);

    const onservableTraerTodos = this._cursoService.traerTodosCursosNotas(
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
