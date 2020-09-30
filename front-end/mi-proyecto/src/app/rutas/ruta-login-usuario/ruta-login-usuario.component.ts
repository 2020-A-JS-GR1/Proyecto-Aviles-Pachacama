import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";
import {UsuarioService} from "../../servicios/http/usuario.service";

@Component({
  selector: 'app-ruta-login-usuario',
  templateUrl: './ruta-login-usuario.component.html',
  styleUrls: ['./ruta-login-usuario.component.css']
})
export class RutaLoginUsuarioComponent implements OnInit {
  correoModelo: string;
  contraseniaModelo: string;
  arregloUsuarios = [];
  constructor(
    private readonly _authService: AuthService,
    private readonly _usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
  }
  revisarLogin(formulario){
    const obsLogin = this._authService.login(this.correoModelo, this.contraseniaModelo);
    obsLogin
      .subscribe(
        (arregloUsuario:any[])=>{
          if(arregloUsuario.length>0){
            this._authService.estaAutenticado = true;
            this.arregloUsuarios = arregloUsuario;
            for (const usuario of this.arregloUsuarios) {
              this._authService.usuariologin= usuario.id;
              this._authService.usuariorol= usuario.rol;

              if(usuario.rol.tiporol === "Administrador"){
                this._authService.esAdmin = true;
              }
              if(usuario.rol.tiporol === "Profesor"){
                this._authService.esProfe = true;
              }
              if(usuario.rol.tiporol === "Estudiante"){
                this._authService.esEstu = true;
              }
            }

          }else{
            this._authService.estaAutenticado=false;
          }
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
