import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path:'my-home',component:HomeComponent},
  {path:'about-me',component:AboutComponent},
  {path:'my-services',component:ServicesComponent},
  {path:'contact-me',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
