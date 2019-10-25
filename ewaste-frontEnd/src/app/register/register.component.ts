import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private common: CommonService, private route: Router) { }
  data: any = {};
  showMsg: boolean = false;
  ngOnInit() {
  }
  redirect() {
    this.route.navigate(['signin']);
  }
  register(data) {
    this.common.register(data).subscribe((data: any) => {
      this.showMsg= true;
      this.data={};
      // this.route.navigate(['signin']);
  
    })
}
}

