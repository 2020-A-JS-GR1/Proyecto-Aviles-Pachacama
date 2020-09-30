import { Component, OnInit } from '@angular/core';
import {CursoService} from "../../servicios/http/curso.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-notas',
  templateUrl: './ruta-editar-notas.component.html',
  styleUrls: ['./ruta-editar-notas.component.css']
})
export class RutaEditarNotasComponent implements OnInit {

  nota;
  idcurso;
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
          const obsCurso = this._cursoService.obtenerUnoPorIdNotas(id);
          obsCurso
            .subscribe(
              (nota: any) => {
                this.nota = nota;
                this.idcurso=nota.curso.id;
                this.llenarFormularioConDatosDeNota()
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeNota(){
    this.mostrarFormulario = true;
  }

  editarNotas(notas){
    const obsEditarUsuario = this._cursoService.editarnota(notas, this.nota.id);
    obsEditarUsuario
      .subscribe(
        (datos:Object)=>{
          const url = ['/curso','notascu',this.idcurso];
          this._router.navigate(url);

        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

}
