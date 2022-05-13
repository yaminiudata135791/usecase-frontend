import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchRestaurantService } from 'src/Services/fetch-restaurant.service';
import { restaurantlist } from '../restaurant.mock';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
restaurant:any;

showRestaurant:any;

@Output () passDataToApp = new EventEmitter();
constructor(private route:ActivatedRoute,private restaurantService:FetchRestaurantService,private router:Router) {

   }

  ngOnInit(): void {
    this.getRestaurantDetails()
  }
  onPress(){
    this.router.navigate(['/item-page']);
  }

  getRestaurantDetails(){
    this.restaurantService.getRestaurant()
    .subscribe((res:any)=>{
      console.log(res);
      
      this.showRestaurant=res.restaurantList;
      this.showRestaurant[0].restaurantImage='../../assets/Restaurant-1.jpg';
      this.showRestaurant[1].restaurantImage='../../assets/Restaurant2.jpg';
      
     
    })
  }

}
