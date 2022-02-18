import { formatDate } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OrderService {

  

  constructor(private http: HttpClient) {
  }

  getHistoryOrders(customer_id: number, active: number) {
    return this.http.get('https://pichanguito.azurewebsites.net/api/orders/list-history-orders?customer_id=' + customer_id 
    + '&active=' + active).pipe();
  }

  getBookingOrders(campus_id:number, product_id:number, booking_date:Date, status:String, active:number) {

    return this.http.get('https://pichanguito.azurewebsites.net/api/orders/list-booking-orders?campus_id=' + campus_id  + '&product_id=' 
    + product_id + '&booking_date=' + formatDate(booking_date, 'yyyy-MM-dd', 'en') + '&status=' + status + '&active=' + active).pipe();
  }

}