import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ItemPageComponent } from './item-page/item-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodiePageComponent } from './foodie-page/foodie-page.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { IndianFoodListComponent } from './indian-food-list/indian-food-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemPageComponent,
    FoodListComponent,
    FoodiePageComponent,
    RegistrationComponent,
    RestaurantComponent,
    CartComponent,
    IndianFoodListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
