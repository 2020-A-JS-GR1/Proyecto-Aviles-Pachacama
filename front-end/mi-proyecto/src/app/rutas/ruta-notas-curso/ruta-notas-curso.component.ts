import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-notas-curso',
  templateUrl: './ruta-notas-curso.component.html',
  styleUrls: ['./ruta-notas-curso.component.css']
})
export class RutaNotasCursoComponent implements OnInit {

  arregloCursos=[];
  usuariosInscritos=[];
  busquedaModelo = '';
  mostrarFormulario = false;
  constructor(
    private readonly  _router: Router,
    private readonly  _cursoService: CursoService,
    private readonly _authService: AuthService,
    private readonly _activateRouter: ActivatedRoute
  ) { }

  irAEditarCurso(id: number) {
    const ruta = ['/curso', 'editarno', id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  filtrarArregloCurso(){
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

  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true;
  }

  ngOnInit(): void {
    const obsRuta = this._activateRouter.params;
    obsRuta
      .subscribe(
        (parametros:Params)=>{//try
          const id= Number(parametros.id);
          const obsUsuario = this._cursoService.traerTodosNotasCurso(id);
          obsUsuario
            .subscribe(
              (usuario: any[]) => {
                this.usuariosInscritos = usuario;
                this.llenarFormularioConDatosDeUsuario()
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }
}
