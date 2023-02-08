import { Component } from '@angular/core';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import{ServicioService} from '../../Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-emprendimientos',
  templateUrl: './listar-emprendimientos.component.html',
  styleUrls: ['./listar-emprendimientos.component.css']
})
export class ListarEmprendimientosComponent {

  emprendimientos: Emprendimiento[]
  constructor(private service:ServicioService, private router:Router){}

  ngOnInit(){
    return this.service.getEmprendimientos()
    .subscribe(data=>{
      this.emprendimientos=data;
    })
  }
}
