import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donacion } from 'src/app/Modelo/Donacion';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-ver-donaciones',
  templateUrl: './ver-donaciones.component.html',
  styleUrls: ['./ver-donaciones.component.css']
})
export class VerDonacionesComponent {

  @Input() emprendimiento:Emprendimiento
  donaciones:Donacion[]

  constructor(private router:Router,private service:ServicioService, private route: ActivatedRoute){}

  ngOnInit(){
    this.service.verDonacionesEmprendimiento(this.emprendimiento.id).subscribe(data => {this.donaciones = data});
  }

}
