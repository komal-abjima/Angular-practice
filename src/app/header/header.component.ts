import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    userName: string='';
    menuType: string = 'default';

    constructor(private router: Router){}
 
    ngOnInit() {
        this.items = [
            {
              label: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: '',
              items: [
                  {
                      label: 'Electronics',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Jwellery',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Mens Clothing',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Womens Clothing',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
            },
            ,
            {
              label: 'About Us',
              icon: 'pi pi-fw pi-file'
          }
            ,
            {
                label: 'Contact Us',
                icon: 'pi pi-fw pi-phone'
            }
            ,
            {
                label: '',
                icon: 'pi pi-fw pi-user',
                items: [
                  {
                      label: 'Login',
                      icon: 'pi pi-fw pi-align-left',
                      
                  },
                  {
                      label: 'Register',
                      icon: 'pi pi-fw pi-align-right',
                      routerLink: '/user-auth'
                  },
                  
                ]
            },
            {
             
            }
        ];

    this.router.events.subscribe((val: any)=>{
        if(val.url){
            if(localStorage.getItem('user')){
                let userStore = localStorage.getItem('user');
                let userData = userStore && JSON.parse(userStore);
                this.userName= userData.name;
                this.menuType='user';
              }
            }
    })
    }
    logout(){
        localStorage.removeItem('user');
        this.router.navigate(['/user-auth'])
    }

  
}
