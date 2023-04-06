import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  data:any;
  constructor(private usrservice:DemoService){

  }
  ngOnInit(){
this.usrservice.getposts().subscribe(Response=>{
  this.data=Response;
  // console.log(this.data.id);
  
})
  }
}
