
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
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
    FormularioComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//flex layout
// npm uninstall @angular/flex-layout
// ng update @angular/material
// npm install @angular/flex-layout
//npm i -s @angular/flex-layout @angular/cdk