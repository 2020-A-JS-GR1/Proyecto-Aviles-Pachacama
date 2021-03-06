import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;
  mostrarFormulario = false;
  constructor(//inyectamos dependencias
    private  readonly _usuarioService: UsuarioService,
    private readonly _activateRouter: ActivatedRoute,
    private readonly _router: Router,
    private readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activateRouter.params;
    obsRuta
      .subscribe(
        (parametros:Params)=>{//try
          const id= Number(parametros.id);
          const obsUsuario = this._usuarioService.obtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
                this.llenarFormularioConDatosDeUsuario()
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true;
  }
  editarUsuario(usuario){
    const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id);
    obsEditarUsuario
      .subscribe(
        (datos:Object)=>{
          if(this._authService.esEstu || this._authService.esProfe){
            const url = ['/usuario','detalle'];
            this._router.navigate(url);
          }else{
            const url = ['/usuario','lista'];
            this._router.navigate(url);
          }

        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

}
