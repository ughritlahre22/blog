import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data:any;
  constructor(private usrservice:DemoService,private router:Router){

  }
  ngOnInit(){
this.usrservice.getposts().subscribe(Response=>{
  this.data=Response;
  // this.router.navigate(['home']);
  
})
  }
}
