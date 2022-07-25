import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {RegisterComponent} from "./components/pages/register/register.component";
import {HomepageComponent} from "./components/pages/homepage/homepage.component";
import {UserPageComponent} from "./components/pages/users/user-page/user-page.component";
import {ListHomeComponent} from "./components/pages/list-home/list-home.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'list-home',
    component: ListHomeComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
