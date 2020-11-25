
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './modules/router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { CardsContainerComponent } from './components/cardsContainer/cardsContainer.component';
import { CardComponent } from './components/card/card.component';
import { HomeMsjComponent } from './components/home.msj/home.msj.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonwhatsappComponent } from './components/buttonwhatsapp/buttonwhatsapp.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { LogincontainerComponent } from './components/login/logincontainer/logincontainer.component';
import { LoginzeroComponent } from './components/login/loginzero/loginzero.component';
import { LoginfirstComponent } from './components/login/loginfirst/loginfirst.component';
import { LoginsecondComponent } from './components/login/loginsecond/loginsecond.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { DeudasComponent } from './components/deudas/deudas.component';
import { ConsultarDeudaComponent } from './components/consultar-deuda/consultar-deuda.component';
import { DeudaentidadComponent } from './components/deudaentidad/deudaentidad.component';
import { AcordiondeudaComponent } from './components/acordiondeuda/acordiondeuda.component';
import { EncabezadoDosComponentesComponent } from './components/encabezadoDosComponentes/encabezadoDosComponentes.component';


//

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent,
    HomeMsjComponent,
    ShortcutsComponent,
    ButtonwhatsappComponent,
    CardsContainerComponent,
    FormularioComponent,
    LogincontainerComponent,
    LoginzeroComponent,
    LoginfirstComponent,
    LoginsecondComponent,
    DeudasComponent,
    ConsultarDeudaComponent,
    DeudaentidadComponent,
    AcordiondeudaComponent,
    EncabezadoDosComponentesComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//flex layout
// npm uninstall @angular/flex-layout
// ng update @angular/material
// npm install @angular/flex-layout
//npm i -s @angular/flex-layout @angular/cdk
