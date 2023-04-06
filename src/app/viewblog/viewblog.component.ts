import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent {
  data:any;
  constructor(private usrservice:DemoService){

  }
  ngOnInit(){
this.usrservice.getposts().subscribe((Response: any)=>{
  this.data=Response;
   
})
  }
}
