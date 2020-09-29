import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  estaAutenticado = false;
  usuariologin='';
  usuariorol='';
  url = 'http://localhost:1337';
  roles=[
    'Administrador',
    'Supervisor'
  ]
  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  login(correo: string,cedula: string){
      return this._httpClient
        .get(this.url + '/Usuario?correo='+ correo+'&contrasenia='+ cedula)
  }



}
