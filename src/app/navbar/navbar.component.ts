import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../Service/servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 @Input() sesion:number

  constructor(private router:Router,private service:ServicioService){
    this.sesion=0;
  }

  Login(){
    this.router.navigate(["login"])
  }
  VerEmprendimiento(nombre: String){
    this.router.navigate(["verEmprendimiento",nombre])
  }

  Cerrar_Sesion(){
    this.sesion=0;
    this.router.navigate(["home"])
  }
}
