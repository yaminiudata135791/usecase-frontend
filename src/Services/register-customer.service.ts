import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class RegisterCustomerService {
    baseUrl="http://localhost:8080/";
    constructor(private http:HttpClient){

    }
    register(registerBody:any){
        const url=`${this.baseUrl}register-customer`
        return this.http.post(url,registerBody);
    }

  /*  addItems(registerBody:any){
        const url=`${this.baseUrl}add-items`
        return this.http.post(url,registerBody);

    }
    */
   

}