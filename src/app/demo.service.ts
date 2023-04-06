import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
private url="http://localhost:3000/Users"
  constructor(private client:HttpClient ) { }
  getposts(){
    return this.client.get(this.url);
  }

  saveBlogData(data:any){
       return this.client.post(this.url,data);
    
    }
    
    deleteData(id:any){
      
      return this.client.delete(this.url+'/'+id);
    }
    
    fetchData(id:any){
      return this.client.get(this.url+'/'+id)
    }
    updateData(id:number,data: any){
      return this.client.put((this.url+'/'+id),data)
    }
}
