import { Component, OnInit } from '@angular/core';
import {CursoService} from "../../servicios/http/curso.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(
    private readonly _cursoService: CursoService,
    private readonly  _router: Router
  ) { }

  ngOnInit(): void {
  }

}
