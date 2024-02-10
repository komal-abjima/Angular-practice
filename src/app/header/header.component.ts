import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
 
    ngOnInit() {
        this.items = [
            {
              label: 'Home',
              icon: 'pi pi-fw pi-home',
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
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Register',
                      icon: 'pi pi-fw pi-align-right'
                  },]
            },
            {
             
            }
        ];
    }
}
