import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import {HttpClientModule} from '@angular/common/http';
import { Day3Component } from './day3/day3.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component'
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { NaPipe } from './na.pipe';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component'


@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    HomeComponent,
    CartComponent,
    ProductComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    ReadComponent,
    CreateComponent,
    Day4Component,
    Day5Component,
    NaPipe,
    Day6Component,
    Day7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
