import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../servicios/auth/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  @Input()
  nombreInput:string;

  @Input()
  direccioInput:string;

  @Input()
  telefonoInput:string;

  @Input()
  correoInput:string;

  @Input()
  contraseniaInput:string;

  @Input()
  rolInput:string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo:string;
  direccionModelo: string;
  correoModelo: string;
  contraseniaModelo: string;
  rolModelo: string;
  telefonoModelo: string;

  constructor(
    readonly _authService: AuthService,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    if(this.nombreInput && this.direccioInput && this.telefonoInput && this.correoInput && this.contraseniaInput && this.rolInput){
      this.nombreModelo = this.nombreInput;
      this.direccionModelo = this.direccioInput;
      this.telefonoModelo = this.telefonoInput;
      this.correoModelo = this.correoInput;
      this.contraseniaModelo = this.contraseniaInput;
      this.rolModelo = this.rolInput;
    }
  }
  crearUsuario(formulario){
    const telefono = this.telefonoModelo
    const rol = this.rolModelo
    const esNumero = !Number.isNaN(Number(telefono));
    const esNumeroRol= !Number.isNaN(Number(rol));
    if(esNumero && esNumeroRol){
      console.log('Listo =)');
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        direccion: this.direccionModelo,
        telefono: this.telefonoModelo,
        correo: this.correoModelo,
        contrasenia: this.contraseniaModelo,
        rol: this.rolModelo

      })
    }else{
      console.error('No es numero')
    }
  }
  ayuda(){
    alert('Ayuda')
  }

  irALogin() {
    const id: number= Number(this._authService.usuariologin);
    const ruta = ['/usuario', 'detalle']
    // /usuario/editar/1
    this._router.navigate(ruta);
  }
}
