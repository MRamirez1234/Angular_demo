import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoggedIn: boolean = false;
  usu=localStorage.getItem('token');
  name=localStorage.getItem('name');
  constructor(private auth: AuthService,private x:Router) {

  }

  ngOnInit(): void {
  console.log('click');
  }
  salirLoguin(){
    localStorage.clear();
    this.x.navigateByUrl('/login');

  }
  navigationDemo(){
    this.x.navigateByUrl('/demos');
  }
}
