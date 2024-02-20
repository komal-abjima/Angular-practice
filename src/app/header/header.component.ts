import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription
  isAuthenticated: boolean = false;
  
  constructor(private dss: DataStorageService, private authService: AuthService){}

  onSaveData(){
      this.dss.storeRecipes();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onFetchData(){
    this.dss.fetchRecipes().subscribe();
  }
}
