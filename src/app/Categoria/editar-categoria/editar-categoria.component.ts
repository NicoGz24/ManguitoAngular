import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {

  categoria:Categoria=new Categoria();

  constructor(private router:Router,private service:ServicioService){
    this.service.dataOutput.subscribe(data=>{this.categoria =data})
  }
}
