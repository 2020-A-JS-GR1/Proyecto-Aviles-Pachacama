import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {

  constructor(
    private readonly _usuarioService: UsuarioService,
    public readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
