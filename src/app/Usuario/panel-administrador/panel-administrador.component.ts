import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css']
})
export class PanelAdministradorComponent {
  categorias: Categoria[];

  constructor(private router:Router,private service:ServicioService){
    this.service.getCategorias().subscribe(data=>{this.categorias=data})
  }


  EditarCategoria(categoria:Categoria){
    this.router.navigate(['editarCategoria',categoria.nombre]);
  }

  AltaCategoria(){
    this.router.navigate(['altaCategoria']);
  }
}
