import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OrderService {

  url!: string;

  constructor(private http: HttpClient) {
  }

  getHistoryOrders(customer_id: number, active: number) {

    this.url = 'https://pichanguito.azurewebsites.net/api/orders/list-history-orders?customer_id=' + customer_id + '&active=' + active;
    return this.http.get(this.url).pipe();
  }

}