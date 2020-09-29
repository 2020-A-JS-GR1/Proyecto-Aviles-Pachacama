import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginUsuarioComponent } from './rutas/ruta-login-usuario/ruta-login-usuario.component';
import { RutaCrearCursoComponent } from './rutas/ruta-crear-curso/ruta-crear-curso.component';
import { RutaEditarCursoComponent } from './rutas/ruta-editar-curso/ruta-editar-curso.component';
import { RutaDetalleCursoComponent } from './rutas/ruta-detalle-curso/ruta-detalle-curso.component';
import { RutaNotasCursoComponent } from './rutas/ruta-notas-curso/ruta-notas-curso.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaListaCursoComponent } from './rutas/ruta-lista-curso/ruta-lista-curso.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UsuarioService} from "./servicios/http/usuario.service";
import {AuthService} from "./servicios/auth/auth.service";
import { RutaCursoComponent } from './rutas/ruta-curso/ruta-curso.component';
import {CursoService} from "./servicios/http/curso.service";
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import { FormularioCursoComponent } from './componentes/formularios/formulario-curso/formulario-curso.component';
import { FormularioNotasComponent } from './componentes/formularios/formulario-notas/formulario-notas.component';
import { FormularioMateriaComponent } from './componentes/formularios/formulario-materia/formulario-materia.component';
import { RutasNotasUsuarioComponent } from './rutas/rutas-notas-usuario/rutas-notas-usuario.component';
import { RutaEditarNotasComponent } from './rutas/ruta-editar-notas/ruta-editar-notas.component';
@NgModule({
  declarations: [
    AppComponent,
    RutaLoginUsuarioComponent,
    RutaCrearCursoComponent,
    RutaEditarCursoComponent,
    RutaDetalleCursoComponent,
    RutaNotasCursoComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaListaCursoComponent,
    RutaCursoComponent,
    RutaDetalleUsuarioComponent,
    FormularioUsuarioComponent,
    FormularioCursoComponent,
    FormularioNotasComponent,
    FormularioMateriaComponent,
    RutasNotasUsuarioComponent,
    RutaEditarNotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //importa el HttpClient
    FormsModule, // permite funcionalidad de los formularios template
    BrowserAnimationsModule,

  ],
  providers: [
    UsuarioService,
    CursoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
