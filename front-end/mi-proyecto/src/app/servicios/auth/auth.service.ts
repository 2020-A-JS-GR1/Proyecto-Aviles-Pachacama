import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  estaAutenticado = false;
  esAdmin = false;
  esProfe = false;
  esEstu = false;
  usuariologin='';
  usuariorol='';

  url = 'http://localhost:1337';
  roles=[
    'Administrador',
    'Profesor',
    'Estudiante'
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
