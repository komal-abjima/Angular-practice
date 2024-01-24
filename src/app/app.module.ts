import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'users', component: UsersComponent, children:[
//       {path: ':id/:name', component: UserComponent}
//   ]},
//   // it is dynamically route the path
//   // {path: 'users/:id/:name', component: UserComponent},
//   {path: 'servers', component: ServersComponent, children:[
//     {path: ':id', component: ServerComponent},
//     // passing query parameters and fragments
//     {path: ':id/edit',component: EditServerComponent }
//   ]},
//   {path: 'not-found', component: PageNotFoundComponent},
//   // {path: 'something', redirectTo: '/not-found'}
//   {path: '**', redirectTo: '/not-found'}
// ];
// {path: 'servers/:id', component: ServerComponent},
// passing query parameters and fragments
// {path: 'servers/:id/edit',component: EditServerComponent }
// ]},


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
