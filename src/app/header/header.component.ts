import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  userName: string = '';
  menuType: string = 'default';
  cartItems = 0;
  public searchTerm !: string;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.updateMenu();

    this.router.events.subscribe(() => {
      this.updateMenu();
    });
  }

  updateMenu() {
    if (localStorage.getItem('user')) {
      const userStore = localStorage.getItem('user');
      const userData = userStore && JSON.parse(userStore);
      this.userName = userData.username;
      this.menuType = 'user';
    } else {
      this.menuType = 'default';
    }

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      { label: 'About Us', icon: 'pi pi-fw pi-file', routerLink: 'aboutus' },
      { label: 'Contact Us', icon: 'pi pi-fw pi-phone', routerLink:'contactus' },
      {
        label: this.getUserName(),
        icon: 'pi pi-fw pi-user',
        visible: this.menuType === 'user'
      },
      { label: 'LogOut', icon: 'pi pi-fw pi-sign-out', command: () => this.logout(), visible: this.menuType === 'user' },
      {
        label: 'Login/Register',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/user-auth',
        visible: this.menuType === 'default'
      },
      {
        label: `Cart(${this.cartItems})`,
        icon: 'pi pi-shopping-cart',

      },
    ];

    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.username;
          this.menuType = 'user';
        }
      }
    });
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;

    }
    this.dataService.cartData.subscribe((items)=>{
      this.cartItems = items.length
    })
  }

  getUserName(): string {
    return this.menuType === 'user' ? `Welcome back, ${this.userName}` : '';

  }


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/user-auth'])
  }
   
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.dataService.search.next(this.searchTerm);
  }

}

