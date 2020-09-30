import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../servicios/auth/auth.service";
import {CursoService} from "../../../servicios/http/curso.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-formulario-notas',
  templateUrl: './formulario-notas.component.html',
  styleUrls: ['./formulario-notas.component.css']
})
export class FormularioNotasComponent implements OnInit {
  @Input()
  calificacionInput:string;

  @Input()
  obserInput:string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  calificacionModelo: string;
  observacionesModelo: string;
  nota;


  constructor(
    private readonly  _cursoService: CursoService,
    private readonly _activateRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.traerNotas();
    if(this.calificacionInput && this.obserInput){
      this.calificacionModelo = this.calificacionInput;
      this.observacionesModelo = this.obserInput;
    }
  }
  crearUsuario(formulario){
    const calificacion = this.calificacionModelo
    const esNumero = !Number.isNaN(Number(calificacion));

    if(esNumero){
      console.log('Listo =)');
      this.informacionValidada.emit({
        calificaciones: this.calificacionModelo,
        observaciones: this.observacionesModelo,

      })
    }else{
      console.error('No es numero')
    }
  }

  traerNotas(){
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
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }
  ayuda(){
    alert('Ayuda')
  }

}
