import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-curso',
  templateUrl: './ruta-curso.component.html',
  styleUrls: ['./ruta-curso.component.css']
})
export class RutaCursoComponent implements OnInit {

  constructor(
    readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
