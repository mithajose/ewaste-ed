import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private route:Router,private common:CommonService) { }
data:any={}
username="testmail@gmail.com";password="password@123"
  ngOnInit() {
  }
  redirect(){
    this.route.navigateByUrl('register');
      }
      login(data){
if(data.email==this.username && data.password==this.password){
  this.route.navigate(['addlist']);
}else{
  alert("wrong username or password");
}
        // this.common.login(data).subscribe((data: any) => {
        //   this.route.navigate(['addlist']);
      
        // })
      }
}
