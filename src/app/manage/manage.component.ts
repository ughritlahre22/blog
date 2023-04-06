import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  data:any;
  searchValue='';
  constructor(private usrservice:DemoService){

  }
  ngOnInit(){
this.usrservice.getposts().subscribe((Response: any)=>{
  this.data=Response;
   
})
  }

  deleteData(id:any){
    if(confirm('Are you sure want to delete a record?'))
    {
       this.usrservice.deleteData(id).subscribe((result: any)=>{
          alert ('Data deleted successfully');
      this.ngOnInit();
      
    })
  }
  }
}
