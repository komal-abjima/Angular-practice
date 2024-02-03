import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { CardModule } from 'primeng/card';
import { FirstComponent } from './aadhar/first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './aadhar/second/second.component';

import { FourthComponent } from './aadhar/fourth/fourth.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ThirdComponent } from './aadhar/third/third.component';
import { DataService } from './service/data.service';



@NgModule({
  declarations: [
    AppComponent,
    AadharComponent,
    FirstComponent,
    SecondComponent,
    FourthComponent,
    ThirdComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
