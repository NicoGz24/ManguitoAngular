import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-footer-categoria',
  templateUrl: './footer-categoria.component.html',
  styleUrls: ['./footer-categoria.component.css']
})
export class FooterCategoriaComponent {
  
  categorias: Categoria[];

  constructor(private router:Router,private service:ServicioService){
    this.service.getCategorias().subscribe(data=>{this.categorias=data})
  }
}
