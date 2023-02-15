import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../Modelo/Categoria';
import { Router } from '@angular/router';
import{ServicioService} from '../../Service/servicio.service';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';


@Component({
  selector: 'app-ver-emprendimiento',
  templateUrl: './ver-emprendimiento.component.html',
  styleUrls: ['./ver-emprendimiento.component.css']
})
export class VerEmprendimientoComponent {
  categorias: Categoria[];
  emprendimiento: any;
  nombreEmprendimiento:String;

  constructor(private router:Router,private service:ServicioService){
    this.service.getCategorias().subscribe(data=>{this.categorias=data})
  }

  ngOnInit(){
    this.service.dataOutput.subscribe(data=>{this.nombreEmprendimiento = data})
    console.log("Nombre",this.nombreEmprendimiento)
  }
   
  DonarManguitos(){
    this.router.navigate(["donarManguitos"])
  }
}
