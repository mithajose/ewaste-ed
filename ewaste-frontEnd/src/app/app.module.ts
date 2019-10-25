import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { AddlistComponent } from './addlist/addlist.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { CommonService } from './common.service';
import { AggregatorComponent } from './aggregator/aggregator.component';
import { RecyclerComponent } from './recycler/recycler.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    AddlistComponent,
    ViewlistComponent,
    AggregatorComponent,
    RecyclerComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
