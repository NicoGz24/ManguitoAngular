import { Component } from '@angular/core';
import{ServicioService} from '../../Service/servicio.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario:Usuario;
  
  constructor(private service:ServicioService, private router:Router){}
  
  ngOnInit(){}
}
