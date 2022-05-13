import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class FetchRestaurantService{

    baseUrl="http://localhost:8080/";
    constructor(private http:HttpClient){}

    getRestaurant(){
        const url=`${this.baseUrl}fetch-restaurant`
        return this.http.get(url);
    }
}