import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  constructor(private route:Router,private common:CommonService) { }
  listid:number
  showMe:boolean=false;
data:any={"listid":"","addressManf":"","category":"","description":"","amount":""};
  ngOnInit() {
  }
  searchdata(listid){
var data2={ "listid":listid}
    this.common.viewlist(data2).subscribe((data: any) => {
      console.log(data)
      this.showMe=true;
      this.data=data;
     
  
    })
  }

}
