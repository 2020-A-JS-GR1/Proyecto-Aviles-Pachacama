import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginUsuarioComponent} from "./rutas/ruta-login-usuario/ruta-login-usuario.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";
import {RutaListaCursoComponent} from "./rutas/ruta-lista-curso/ruta-lista-curso.component";
import {RutaCursoComponent} from "./rutas/ruta-curso/ruta-curso.component";
import {RutaCrearCursoComponent} from "./rutas/ruta-crear-curso/ruta-crear-curso.component";
import {RutaEditarCursoComponent} from "./rutas/ruta-editar-curso/ruta-editar-curso.component";
import {RutaDetalleUsuarioComponent} from "./rutas/ruta-detalle-usuario/ruta-detalle-usuario.component";
import {RutaDetalleCursoComponent} from "./rutas/ruta-detalle-curso/ruta-detalle-curso.component";
import {RutaNotasCursoComponent} from "./rutas/ruta-notas-curso/ruta-notas-curso.component";
import {RutasNotasUsuarioComponent} from "./rutas/rutas-notas-usuario/rutas-notas-usuario.component";
import {RutaEditarNotasComponent} from "./rutas/ruta-editar-notas/ruta-editar-notas.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path:'inicio',
    children: [
      {
        component: RutaLoginUsuarioComponent,
        path:'login'
      },
      {
        component: RutaCrearUsuarioComponent,
        path:'registro'
      }
    ]
  },
  {
    component: RutaUsuarioComponent,
    path: 'usuario',
    /*canActivate:[
      EstaLogeadoGuard
    ],*/
    children: [
      {
        path: 'crear',
        component: RutaCrearUsuarioComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path:'editar/:id',
        component: RutaEditarUsuarioComponent,
        /*canActivate:[
          EsAdministradorGuard
        ]*/
      },
      {
        path:'lista',
        component: RutaListaUsuarioComponent,
        /*canActivate:[
          EsAdministradorGuard
        ]*/
      },
      {
        path:'detalle',
        component: RutaDetalleUsuarioComponent,
        /*canActivate:[
          EsAdministradorGuard
        ]*/
      },
      {
        path:'',
        redirectTo:'detalle',
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'curso',
    component: RutaCursoComponent,
    children:[
      {
        path: 'listacu',
        component: RutaListaCursoComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path: 'crearcu',
        component: RutaCrearCursoComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path: 'editarcu/:id',
        component: RutaEditarCursoComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path: 'detallecu',
        component: RutaDetalleCursoComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path: 'notascu/:id',
        component: RutaNotasCursoComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path: 'notas',
        component: RutasNotasUsuarioComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path: 'editarno/:id',
        component: RutaEditarNotasComponent
        /*,canActivate:[
          EsSupervisorGuard
        ]*/
      },
      {
        path:'',
        redirectTo:'listacu',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
