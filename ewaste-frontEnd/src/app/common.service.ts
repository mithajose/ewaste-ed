import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
url="http://localhost:4040"
  register(data){
    console.log(data)
    console.log(this.url)
  return  this.http.post(this.url+"/registration",data);
// return {"data":"success"};
  }
  login(data){
    console.log(data)
    return this.http.post(this.url+"/login",data);
  }
  addlist(data){
    console.log(data)
    return this.http.post(this.url+"/addlist",data);
  }
  viewlist(data){
    console.log(data)
    return  this.http.post(this.url+"/viewlist",data);
  }
  getDataForAggr(){
    // console.log()
    return  this.http.get(this.url+"/getListForAggregator");
  }
  approveAggregator(data){
    return this.http.post(this.url+'/approveAggregator',data)
  }
  getDataForRecycler(){
    return  this.http.get(this.url+"/getListForRecycler");
  }
  approveRecycler(data){
    return this.http.post(this.url+'/approveRecycler',data)
  }


}
