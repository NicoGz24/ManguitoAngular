import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../Modelo/Categoria';
import{ServicioService} from '../Service/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categorias: Categoria[];

  constructor(private router:Router,private service:ServicioService){
    this.service.getCategorias().subscribe(data=>{this.categorias=data})
  }

  Login(){
    this.router.navigate(["login"])
  }

  AltaUsuario(){
    this.router.navigate(["altaUsuario"])
  }

  VerEmprendimiento(nombre: String){
    this.router.navigate(["verEmprendimiento",nombre])
  }
}
