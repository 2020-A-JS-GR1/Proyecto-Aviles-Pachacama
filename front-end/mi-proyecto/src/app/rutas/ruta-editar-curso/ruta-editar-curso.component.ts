import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";

@Component({
  selector: 'app-ruta-editar-curso',
  templateUrl: './ruta-editar-curso.component.html',
  styleUrls: ['./ruta-editar-curso.component.css']
})
export class RutaEditarCursoComponent implements OnInit {

  curso;
  mostrarFormulario = false;
  constructor(//inyectamos dependencias
    private  readonly _cursoService: CursoService,
    private readonly _activateRouter: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activateRouter.params;
    obsRuta
      .subscribe(
        (parametros:Params)=>{//try
          const id= Number(parametros.id);
          const obsCurso = this._cursoService.obtenerUnoPorId(id);
          obsCurso
            .subscribe(
              (curso: any) => {
                this.curso = curso;
                this.llenarFormularioConDatosDeCurso()
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeCurso(){
    this.mostrarFormulario = true;
  }
  editarCurso(usuario){
    const obsEditarUsuario = this._cursoService.editar(usuario, this.curso.id);
    obsEditarUsuario
      .subscribe(
        (datos:Object)=>{
          const url = ['/curso','listacu'];
          this._router.navigate(url);

        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

}
