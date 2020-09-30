import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-materia',
  templateUrl: './formulario-materia.component.html',
  styleUrls: ['./formulario-materia.component.css']
})
export class FormularioMateriaComponent implements OnInit {


  @Input()
  nombremaInput:string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();


  nombremaModelo: string;

  constructor() { }

  ngOnInit(): void {
    if(this.nombremaInput ){
      this.nombremaModelo = this.nombremaInput;
    }
  }
  crearMateria(formulario){

      console.log('Listo =)');
      this.informacionValidada.emit({
        nombremateria: this.nombremaModelo,
      })
  }
  ayuda(){
    alert('Ayuda')
  }

}

