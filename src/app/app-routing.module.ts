import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './pages/reservation/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"menu/:id",component:MenuPageComponent},
  {path:"contact",component:ContactComponent},
  {path:"reservation",component:ReservationComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
