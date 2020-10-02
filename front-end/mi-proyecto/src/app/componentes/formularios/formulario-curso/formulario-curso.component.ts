import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../servicios/auth/auth.service";
import {CursoService} from "../../../servicios/http/curso.service";

@Component({
  selector: 'app-formulario-curso',
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.css']
})
export class FormularioCursoComponent implements OnInit {

  @Input()
  nombreInput:string;

  @Input()
  fechaIniInput:string;

  @Input()
  fechaFinInput:string;

  @Input()
  materiaInput:string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo:string;
  fechaIniModelo: string;
  fechafinModelo: string;
  materiaModelo: string;
  arregloMaterias = [];

  constructor(
    private readonly _authService: AuthService,
    private readonly  _cursoService: CursoService,
  ) { }

  ngOnInit(): void {
    this.traerMaterias();
    if(this.nombreInput && this.fechaIniInput && this.fechaFinInput && this.materiaInput){
      this.nombreModelo = this.nombreInput;
      this.fechaIniModelo = this.fechaIniInput;
      this.fechafinModelo = this.fechaFinInput;
      this.materiaModelo = this.materiaInput
    }
  }

  crearUsuario(formulario){
    const materia = this.materiaModelo
    const esNumero = !Number.isNaN(Number(materia));

    if(esNumero){
      console.log('Listo =)');
      this.informacionValidada.emit({
        nombrecurso: this.nombreModelo,
        fechainicio: this.fechaIniModelo,
        fechafin: this.fechafinModelo,
        usuario: this._authService.usuariologin,
        materia: this.materiaModelo

      })
    }else{
      console.error('No es numero')
    }
  }

  traerMaterias(){
    const onservableTraerTodos = this._cursoService.traerTodosMateria();
    onservableTraerTodos
      .subscribe(
        (materia: any[]) => {
          this.arregloMaterias= materia;
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }
  ayuda(){
    alert('Ayuda')
  }

}
