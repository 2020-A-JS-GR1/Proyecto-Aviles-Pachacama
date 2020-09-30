import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../../servicios/http/usuario.service";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-detalle-usuario',
  templateUrl: './ruta-detalle-usuario.component.html',
  styleUrls: ['./ruta-detalle-usuario.component.css']
})
export class RutaDetalleUsuarioComponent implements OnInit {

  usuario;
  id:number;
  mostrarFormulario = false;
  constructor(
    private readonly  _router: Router,
    private readonly  _usuarioService: UsuarioService,
    private readonly _authService: AuthService
  ) { }

  filtrarUsuario() {
    this.id =Number(this._authService.usuariologin)
    const onservableTraerTodos = this._usuarioService.obtenerUnoPorId(this.id);
    onservableTraerTodos
      .subscribe(
        (usuario: any) => {
          this.usuario = usuario;
          this.llenarFormularioConDatosDeUsuario()
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }
  ngOnInit(): void {
    console.log(this.id)
    console.log(this._authService.usuariorol)

    this.filtrarUsuario();
  }
  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true;
  }

  irAEditarUsuario(id: any) {
    const ruta = ['/usuario', 'editar', id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }


  irALogin() {
    this._authService.estaAutenticado=false;
    this._authService.esAdmin = false;
    this._authService.esProfe = false;
    this._authService.esEstu= false;
    const ruta = ['/inicio']
    // /usuario/editar/1
    this._router.navigate(ruta);
  }
}
