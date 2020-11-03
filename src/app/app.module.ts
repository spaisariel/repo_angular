
import { NgModule } from '@angular/core';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavegacionComponent
  ],
  imports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
