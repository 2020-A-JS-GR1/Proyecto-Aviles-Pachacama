import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";
import {AuthService} from "./servicios/auth/auth.service";

@Component({
  selector: 'proyecto-js',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  arregloUsuarios=[];

  constructor(
    private readonly _usuarioService: UsuarioService,
    public readonly _authService: AuthService
  ) {
  }

  ngOnInit(){

  }


}
