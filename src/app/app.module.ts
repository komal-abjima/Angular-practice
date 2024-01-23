import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { EmployeeService } from './table/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
