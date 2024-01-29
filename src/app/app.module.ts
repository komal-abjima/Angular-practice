import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { SubscribeService } from './services/subscribe.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SubscribeService, UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
