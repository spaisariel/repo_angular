
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HomeMsjComponent } from './home.msj/home.msj.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent, HomeComponent, CardComponent, HomeMsjComponent, ShortcutsComponent
  ],
  imports: [MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
