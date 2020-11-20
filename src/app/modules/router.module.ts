import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { LogincontainerComponent } from '../components/login/logincontainer/logincontainer.component';
import { LoginzeroComponent } from '../components/login/loginzero/loginzero.component';
import { LoginfirstComponent } from '../components/login/loginfirst/loginfirst.component';
import { LoginsecondComponent } from '../components/login/loginsecond/loginsecond.component';
import { HomeComponent } from '../components/home/home.component';
import { DeudasComponent } from '../components/deudas/deudas.component';

const routes: Routes = [
     {
       path: '',
       component: LogincontainerComponent,
       children: [{
         path: '',
         pathMatch: 'prefix',
         redirectTo :  'signIn'
       },
       {
        path: 'signIn',
        component: LoginzeroComponent
       },
      {
        path: 'signInF',
        component: LoginfirstComponent
      },
      {
        path: 'signInS',
        component: LoginsecondComponent
      }
      ]
     },
     {
       path: 'autogestion',
       component: NavigationComponent,
       children: [{
         path: '',
         pathMatch: 'prefix',
         redirectTo: 'deudas'
       },
      {
        path: 'deudas',
        component: DeudasComponent,
        children: [{
          path: '',
          pathMatch: 'prefix',
          redirectTo: 'misdeudas'
        },
      {
        path: 'misdeudas',
        component: HomeComponent
      }]
      }
      ]
     }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }
