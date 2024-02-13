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
    userName: string = '';
    menuType: string = 'default';

    constructor(private router: Router) { }
    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: '',
                items: [
                    { label: 'Electronics', icon: 'pi pi-fw pi-align-left' },
                    { label: 'Jewelry', icon: 'pi pi-fw pi-align-right' },
                    { label: 'Mens Clothing', icon: 'pi pi-fw pi-align-center' },
                    { label: 'Womens Clothing', icon: 'pi pi-fw pi-align-justify' }
                ]
            },
            { label: 'About Us', icon: 'pi pi-fw pi-file' },
            { label: 'Contact Us', icon: 'pi pi-fw pi-phone' },
            {
                label: this.getUserName(),
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Logout', icon: 'pi pi-fw pi-sign-out', command: () => this.logout() }
                ],
                visible: this.menuType === 'user'
            },
            {
                label: 'Login/Register',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: '/user-auth',
                visible: this.menuType === 'default'
            },
        ];

        this.router.events.subscribe((val: any) => {
            if (val.url) {
                if (localStorage.getItem('user')) {
                    let userStore = localStorage.getItem('user');
                    let userData = userStore && JSON.parse(userStore);
                    this.userName = userData.name;
                    this.menuType = 'user';
                }
            }
        });
    }

    getUserName(): string {
        return this.menuType === 'user' ? `Welcome, ${this.userName}` : '';

    }


    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/user-auth'])
    }
}
