 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './aadhar/first/first.component';
import { SecondComponent } from './aadhar/second/second.component';
import { ThirdComponent } from './aadhar/third/third.component';
import { FourthComponent } from './aadhar/fourth/fourth.component';
 
const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second/:id', component: SecondComponent },
  { path: 'third/:id', component: ThirdComponent },
  { path: 'fourth/:id', component: FourthComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}