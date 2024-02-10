import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { CardModule, } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
