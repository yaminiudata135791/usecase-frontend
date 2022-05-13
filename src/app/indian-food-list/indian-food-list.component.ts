import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRestaurantTwoService } from 'src/Services/get-restaurant-two.service';
import { Items } from '../indian-food-list.mock';

@Component({
  selector: 'app-indian-food-list',
  templateUrl: './indian-food-list.component.html',
  styleUrls: ['./indian-food-list.component.css']
})
export class IndianFoodListComponent implements OnInit {

item:any;
showRestaurantTwo:any;

  @Output () passDataToApp = new EventEmitter();

  constructor(private route:ActivatedRoute,private itemTwoService: GetRestaurantTwoService) { }

  ngOnInit(): void {
    this.getRestaurantTwoDetail()
  }
  getRestaurantTwoDetail(){
    this.itemTwoService.getRestaurantTwo()
    .subscribe((res:any)=>{
      console.log(res);
      this. showRestaurantTwo=res.itemOneCardResponseList;
      this.showRestaurantTwo[0].itemImageTwo='../../assets/Masala dosa1.jpg';
      this.showRestaurantTwo[1].itemImageTwo='../../assets/Channa1.jpg'
      this.showRestaurantTwo[2].itemImageTwo='../../assets/samosa4.jpg'
      this.showRestaurantTwo[3].itemImageTwo='../../assets/butter-chicken1.jpg'
      this.showRestaurantTwo[4].itemImageTwo='../../assets/paneer.jpg'
      this.showRestaurantTwo[5].itemImageTwo='../../assets/biriyani.jpg'
      this.showRestaurantTwo[6].itemImageTwo='../../assets/tir.jpg'
      this.showRestaurantTwo[7].itemImageTwo='../../assets/tandoori-chicken.jpg'
      this.showRestaurantTwo[8].itemImageTwo='../../assets/naan.jpg'


    })

}
}
