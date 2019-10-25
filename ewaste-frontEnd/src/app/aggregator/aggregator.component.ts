import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggregator',
  templateUrl: './aggregator.component.html',
  styleUrls: ['./aggregator.component.css']
})
export class AggregatorComponent implements OnInit {
  items: any;

  constructor(private route:Router,private common:CommonService) { }

  listid:number
  showMe:boolean=false;
data:any={"listid":"","addressManf":"","category":"","description":"","amount":""};
  ngOnInit() {
    this.common.getDataForAggr().subscribe((data: any) => {
      console.log(data)
      this.showMe=true;
      this.items=data.details;
     
  
    })
  }
  searchdata(listid){

   
  }
  sendToRecycler(listid){
    var data2={ "listid":listid}
    this.common.approveAggregator(data2).subscribe((data:any)=>{
      alert("sended to recycler");
    
    })
  }

}
