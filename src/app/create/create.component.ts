import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from '../demo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  btnupdate: boolean = true;
  btnpost: boolean = false;
  url: any;
  msg="";

  constructor(
    private demo: DemoService,
    private route: ActivatedRoute,
    private router: Router,
    private client: HttpClient
  ) {}
  addData = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100),
    ]),
    comment: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    createdby: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
      Validators.pattern('[A-Za-z]+'),
    ]),
    img: new FormControl(''),
  });
  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      //display data when edit button clicked
      let id = this.route.snapshot.paramMap.get('id');

      this.demo.fetchData(id).subscribe((result: any) => {
        // console.log(result);
        this.addData = new FormGroup({
          id: new FormControl(result.id),
          title: new FormControl(result.title),
          content: new FormControl(result.content),
          comment: new FormControl(result.comment),
          createdby: new FormControl(result.createdby),
          img: new FormControl(result.img),
        });
        console.log(result.id);
      });
      this.btnupdate = false;
      this.btnpost = true;
    }
  }

  saveData() {
    this.demo.saveBlogData(this.addData.value).subscribe(
      (result) => {
        // console.log(result);
        alert('Record submitted scuccccessfully');
        this.addData.reset();
      },
      (err) => {
        alert('some thing went wrong');
      }
    );
  }

  updateData() {
    this.demo
      .updateData(this.route.snapshot.params['id'], this.addData.value)
      .subscribe(
        (result: any) => {
          // console.log(result);

          alert('Record Updated Successfully');
          this.router.navigate(['/manage']);
        },
        (err) => {
          alert('some thing went wrong');
        }
      );
  }
  cancel() {
    this.router.navigate(['/manage']);
  }
  get f() {
    return this.addData.controls;
  }
  checkUser() {
    this.client.get('http://localhost:3000/users').subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.id === this.addData.value.id;
      });
      if (user) {
        alert('Username Already exist');
        this.addData.reset();
      }
    });
  }
  selectFile(event:any){

    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
  }
}
