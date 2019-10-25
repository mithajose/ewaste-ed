import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-recycler',
  templateUrl: './recycler.component.html',
  styleUrls: ['./recycler.component.css']
})
export class RecyclerComponent implements OnInit {

  items: any;

  constructor(private route:Router,private common:CommonService) { }

  listid:number
  showMe:boolean=false;
data:any={"listid":"","addressManf":"","category":"","description":"","amount":""};
  ngOnInit() {
    this.common.getDataForRecycler().subscribe((data: any) => {
      console.log(data)
      this.showMe=true;
      this.items=data.details;
     
  
    })
  }
  searchdata(listid){

   
  }
  Approve(listid){
    var data2={ "listid":listid}
    this.common.approveRecycler(data2).subscribe((data:any)=>{
      alert("sended to recycler");
    
    })
  }


}
