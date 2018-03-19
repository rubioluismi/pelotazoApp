import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera.component';
import { LoginComponent } from './componentes/login.component';


import { routing, appRoutingProviders } from './componentes/rutas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
