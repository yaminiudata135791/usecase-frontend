import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class GetRestaurantOneService{

    baseUrl="http://localhost:8080/";
    constructor(private http:HttpClient){}

    getRestaurantOne(){
        const url=`${this.baseUrl}get-restaurant-one`
        return this.http.get(url);
    }
}