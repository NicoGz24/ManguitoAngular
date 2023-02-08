import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManguitoAngular';

  constructor(private router:Router){}

  Login(){
    this.router.navigate(["login"])
  }

  AltaUsuario(){
    this.router.navigate(["altaUsuario"])
  }

  VerCategoria(){
    this.router.navigate(["verCategoria"])
  }

  VerEmprendimiento(){
    this.router.navigate(["verEmprendimiento"])
  }
}
