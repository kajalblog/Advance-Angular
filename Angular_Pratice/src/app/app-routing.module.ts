import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReadComponent } from './read/read.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  // {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"read",component:ReadComponent},
  {path:"create",component:CreateComponent},
  {path:"create/:id",component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
