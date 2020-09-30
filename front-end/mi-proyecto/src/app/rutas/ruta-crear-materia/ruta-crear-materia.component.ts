import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CursoService} from "../../servicios/http/curso.service";

@Component({
  selector: 'app-ruta-crear-materia',
  templateUrl: './ruta-crear-materia.component.html',
  styleUrls: ['./ruta-crear-materia.component.css']
})
export class RutaCrearMateriaComponent implements OnInit {

  constructor(
    private readonly _cursoService : CursoService,
    private readonly  _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearMateria(usuario){
    const obsCrear = this._cursoService.crearMaterias(usuario)
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
