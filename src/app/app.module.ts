import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
