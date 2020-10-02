import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
@Injectable()
export class CursoService {
  cursoId;
  url='http://localhost:1337'
  //constructor
  constructor(
    private readonly _httpClient:HttpClient,
    private readonly _authService: AuthService
  ) {
  }

  traerTodosCurso(consulta?: string){
    return this._httpClient.get(this.url+'/Curso?'+ consulta+'&sort=id%20ASC')
  }

  traerTodosCursosNotas(consulta: string){

      return this._httpClient.get(this.url+'/Notas?'+ consulta+'&sort=id%20ASC')
  }
  traerTodosCursosNotas2(){

    if(this._authService.esEstu){
      const idUsuario:number = Number(this._authService.usuariologin);
      return this._httpClient.get(this.url+'/Notas?usuario='+idUsuario+'&sort=id%20ASC')
    }

  }

  traerTodosNotasCurso(idCurso:number){
    return this._httpClient.get(this.url+'/Notas?curso='+ idCurso+'&sort=id%20ASC')
  }

  traerTodosMateria(){
    return this._httpClient.get(this.url+'/Materia?&sort=id%20ASC')
  }

  obtenerTodosCursosPorId(idUsuario: number){
    return this._httpClient.get(this.url+'/Curso?usuario='+idUsuario);
  }
  obtenerUnoPorId(idCurso: number){
    return this._httpClient.get(this.url+'/Curso/'+idCurso);
  }
  obtenerUnoPorIdNotas(idNota: number){
    return this._httpClient.get(this.url+'/Notas/'+idNota);
  }

  //Post /Usuario
  crear(curso){
    return this._httpClient.post(
      this.url + '/Curso',
      curso
    )
  }
  crearMaterias(materia){
    return this._httpClient.post(
      this.url + '/Materia',
      materia
    )
  }

  registrarCursos(curso){
    return this._httpClient.post(
      this.url + '/Notas',
      curso
    )
  }

  editar(curso, id){
    return this._httpClient.put(
      this.url + '/Curso/'+ id,
      curso
    )
  }
  editarnota(nota, id){
    return this._httpClient.put(
      this.url + '/Notas/'+ id,
      nota
    )
  }
  eliminar(idUsuario:number){
    return this._httpClient.delete( this.url + '/Curso/' + idUsuario);

  }

}
