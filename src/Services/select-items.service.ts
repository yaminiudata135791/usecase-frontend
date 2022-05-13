import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})

export class  SelectItemsService{
    baseUrl="http://localhost:8080/";
    constructor(private http:HttpClient){

    }
    items(itemsBody:any){
        const url=`${this.baseUrl}select-items`
        return this.http.post(url,itemsBody);
    }


}