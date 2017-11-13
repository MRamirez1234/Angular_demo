import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
name=localStorage.getItem('name');

  constructor(private ruta:Router) {}

  ngOnInit(){
    console.log(this.name);
  }
  
  onLogin(auto,b): void {
    if(auto && b){console.log(auto,b);
      localStorage.setItem('token',auto);
      localStorage.setItem('name',auto);
      
       
    this.ruta.navigateByUrl('/demos');

    }

  }

  navigationDir(){
    this.ruta.navigateByUrl('/dir');
  }
}
