import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { AddlistComponent } from './addlist/addlist.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AggregatorComponent } from './aggregator/aggregator.component';
import { RecyclerComponent } from './recycler/recycler.component';


const routes: Routes = [
  {path:"",component:RegisterComponent},
  {path:"register",component:RegisterComponent},
  {path:"signin",component:SigninComponent},
  {path:"addlist",component:AddlistComponent},
  {path:"viewlist",component:ViewlistComponent},
  {path:"aggregator",component:AggregatorComponent},
  {path:"recycler",component:RecyclerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
