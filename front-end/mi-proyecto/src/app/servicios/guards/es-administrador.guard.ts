import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class EsAdministradorGuard implements CanActivate{
  id:number;
  constructor(
    private readonly _authService: AuthService
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //logica
    this.id =Number(this._authService.usuariorol)
    const esAdministrador = this._authService
      .roles
      .some(
        (rol: string)=>{
          if(this.id=== 1){
            return rol === 'Administrador'
          }
        }
      )
    return esAdministrador

  }

}
