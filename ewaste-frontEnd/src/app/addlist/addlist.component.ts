import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  constructor(private common:CommonService,private route:Router) { }
data:any={};
  ngOnInit() {
  }
addlist(data){
  this.common.addlist(data).subscribe((data:any)=>{
  this.route.navigate(['viewlist']);
 })
}
}
