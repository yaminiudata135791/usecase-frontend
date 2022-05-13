import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class GetRestaurantTwoService{

    baseUrl="http://localhost:8080/";
    constructor(private http:HttpClient){}

    getRestaurantTwo(){
        const url=`${this.baseUrl}get-restaurant-two`
        return this.http.get(url);
    }
}