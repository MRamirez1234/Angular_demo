import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent {
name=localStorage.getItem('name');

  constructor(private a:Router) {}
  ngOnInit(){
    console.log(this.name);
  }


  onDir(auto,b): void {
    if(auto && b){console.log(auto,b);
      localStorage.setItem('token',auto);
      localStorage.setItem('name',b);
      
       
    this.a.navigateByUrl('/status');
    }
  
    }
    salirLoguin(){
      localStorage.clear();
      this.a.navigateByUrl('/login');
  
    }
    
}
