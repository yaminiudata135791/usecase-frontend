import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodiePageComponent } from './foodie-page/foodie-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'',component:FoodiePageComponent},
  {path:'item-page',component:ItemPageComponent},
  {path:'restaurant',component:RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
