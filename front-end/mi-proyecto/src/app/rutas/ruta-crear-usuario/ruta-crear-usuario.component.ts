import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService : UsuarioService,
    private readonly  _router: Router,
    private readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const obsCrear = this._usuarioService.crear(usuario)
    obsCrear
      .subscribe(
        (datos: Object)=>{
          if(this._authService.estaAutenticado){
            const url = ['/usuario','lista']
            this._router.navigate(url);
          }else {
            const url = ['/inicio']
            this._router.navigate(url);
          }

        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
