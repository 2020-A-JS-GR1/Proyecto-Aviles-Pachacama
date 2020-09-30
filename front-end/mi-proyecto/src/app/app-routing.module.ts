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
import {EstaLogeadoGuard} from "./servicios/guards/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/guards/es-administrador.guard";
import {EsProfesorGuard} from "./servicios/guards/es-profesor.guard";
import {EsEstudianteGuard} from "./servicios/guards/es-estudiante.guard";
import {RutaCrearMateriaComponent} from "./rutas/ruta-crear-materia/ruta-crear-materia.component";

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
    canActivate:[
      //EstaLogeadoGuard
    ],
    children: [
      {
        path: 'crear',
        component: RutaCrearUsuarioComponent
        ,/*canActivate:[
          EsAdministradorGuard
        ]*/
      },
      {
        path:'editar/:id',
        component: RutaEditarUsuarioComponent,
        // canActivate:[
        //   EsAdministradorGuard,
        //   EstaLogeadoGuard,
        //   EsProfesorGuard,
        //   EsEstudianteGuard
        // ]
      },
      {
        path:'lista',
        component: RutaListaUsuarioComponent,

      },
      {
        path:'detalle',
        component: RutaDetalleUsuarioComponent,

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
    canActivate:[
     // EstaLogeadoGuard
    ],
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

      },
      {
        path: 'editarcu/:id',
        component: RutaEditarCursoComponent

      },
      {
        path: 'detallecu',
        component: RutaDetalleCursoComponent

      },
      {
        path: 'notascu/:id',
        component: RutaNotasCursoComponent

      },
      {
        path: 'notas',
        component: RutasNotasUsuarioComponent

      },
      {
        path: 'materia',
        component: RutaCrearMateriaComponent

      },
      {
        path: 'editarno/:id',
        component: RutaEditarNotasComponent

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
