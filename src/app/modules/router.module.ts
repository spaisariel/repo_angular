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
import { ConsultarDeudaComponent } from '../components/consultar-deuda/consultar-deuda.component';
import { DeudaentidadComponent } from '@components/deudaentidad/deudaentidad.component';
import { ConvenioComponent } from '../components/convenio/convenio.component';
import { PlanesdeudaComponent } from '../components/planesdeuda/planesdeuda.component';

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
      },
      {
        path: 'entidadn',
        component: DeudaentidadComponent
      },
      {
        path: 'misplanes',
        component: PlanesdeudaComponent
      },
      {
        path: 'convenio',
        component: ConvenioComponent
      }
    ]
      },
      {
        path: 'consultarOtraDeuda',
        component: ConsultarDeudaComponent
      }
      ]
     }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }
