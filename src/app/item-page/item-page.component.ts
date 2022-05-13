import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetRestaurantOneService } from 'src/Services/get-restaurant-one.service';
import { RegisterCustomerService } from 'src/Services/register-customer.service';
import { SelectItemsService } from 'src/Services/select-items.service';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
selectItems:any=[]
  food:any;
  showRestaurantOne:any;
  

  @Output () passDataToApp = new EventEmitter();
  constructor(private route:ActivatedRoute,private itemOneService: GetRestaurantOneService,private selectService:SelectItemsService,private addItemService:RegisterCustomerService) { }

  ngOnInit(): void {
    this.getRestaurantOneDetail()
  }

  getRestaurantOneDetail(){
    this.itemOneService.getRestaurantOne()
    .subscribe((res:any)=>{
      console.log(res);
      this. showRestaurantOne=res.itemOneCardResponseList;
      this.showRestaurantOne[0].itemImageOne='../../assets/burger.jpg';
      this.showRestaurantOne[1].itemImageOne='../../assets/lasagna.jpg'
      this.showRestaurantOne[2].itemImageOne='../../assets/noodles.jpeg'
      this.showRestaurantOne[3].itemImageOne='../../assets/pasta.jpeg'
      this.showRestaurantOne[4].itemImageOne='../../assets/pizza.jpg'
      this.showRestaurantOne[5].itemImageOne='../../assets/tiramisu.jpg'
      this.showRestaurantOne[6].itemImageOne='../../assets/ravioli.jpg'
      this.showRestaurantOne[7].itemImageOne='../../assets/Rigatoni alla Carbonara.jpg'
      this.showRestaurantOne[8].itemImageOne='../../assets/bruschetta.jpg'


    })
  }
  onAddItem(itemName:any){
this.selectItems.push(itemName);
console.log(this.selectItems)
/*
this.addItemService.addItems(this.selectItems.value)
.subscribe((res:any)=>{
  console.log(res);
  })
  */
}
 
  onSelectList(){
    this.selectService.items(this.selectItems)
    .subscribe((res:any)=>{
      console.log(res);
    
    
    })

  }


}
