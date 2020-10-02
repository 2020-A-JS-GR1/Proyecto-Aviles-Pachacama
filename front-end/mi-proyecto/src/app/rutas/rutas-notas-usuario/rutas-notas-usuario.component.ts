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
    if(this.busquedaModelo != ''){
      const esNumero=!Number.isNaN(Number(this.busquedaModelo));
      if(esNumero){
        const consulta = {

          calificaciones:  this.busquedaModelo
          ,
          usuario:this._authService.usuariologin
        }
        const consultaString = 'where=' + JSON.stringify(consulta);

        const onservableTraerTodos = this._cursoService.traerTodosCursosNotas(consultaString);
        onservableTraerTodos
          .subscribe(
            (cursos: any[]) => {
              this.arregloCursos = cursos;
            },
            (error) => {
              console.error('Error', error);
            }
          )
      }else{
        const consulta = {

          observaciones: {
            contains: this.busquedaModelo
          },
          usuario:this._authService.usuariologin
        }
        const consultaString = 'where=' + JSON.stringify(consulta);

        const onservableTraerTodos = this._cursoService.traerTodosCursosNotas(consultaString);
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
    } else{
      this.traernotasEstudiante()
    }



  }
  traernotasEstudiante(){
    const onservableTraerTodos = this._cursoService.traerTodosCursosNotas2();
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
