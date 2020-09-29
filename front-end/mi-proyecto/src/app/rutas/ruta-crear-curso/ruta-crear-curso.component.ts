import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";

@Component({
  selector: 'app-ruta-crear-curso',
  templateUrl: './ruta-crear-curso.component.html',
  styleUrls: ['./ruta-crear-curso.component.css']
})
export class RutaCrearCursoComponent implements OnInit {

  constructor(
    private readonly _cursoService : CursoService,
    private readonly  _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(curso){
    const obsCrear = this._cursoService.crear(curso)
    obsCrear
      .subscribe(
        (datos: Object)=>{
          const url = ['/curso','listacu']
          this._router.navigate(url);
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}

