import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-task1';

  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;

  }
}
