import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'status',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class Demo implements OnInit {
  isLoggedIn: boolean = false;
  usu=localStorage.getItem('token');

  constructor(private auth: AuthService,private x:Router) {

  }

  ngOnInit(): void {
  console.log('star');
  }
  salirLoguin(){
    localStorage.clear();
    this.x.navigateByUrl('/login');

  }
  navigationStatus(){
    this.x.navigateByUrl('/login');
  }
}
