import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './Usuario/agregar/agregar.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { EliminarComponent } from './Usuario/eliminar/eliminar.component';
import { ListarComponent } from './Usuario/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
