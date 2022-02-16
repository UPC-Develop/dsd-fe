import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Boocking } from 'src/app/model/booking';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent {

  constructor(public router: Router, private orderService:  OrderService){
  }

  orders: Order[] = []; 
  customer_id: number = 1;
  dataSource: any;

  displayedColumns: string[] = ['code', 'campus_description', 'product_category_description', 'product_description', 
  "order_date", "booking_date", "quantity","price", "sub_total", "discount","total_tax",
"total", "currency_type","start_hour", "end_hour"];
  
    
  ngOnInit(){

    this.orderService.getHistoryOrders(this.customer_id, 1).subscribe((rest: any) => {
      this.orders = rest.data;
      console.log(rest.data);
      this.dataSource = this.orders;
    });
  }

  ngNextForm(){
    this.router.navigate(['home/campus']);
  }
}
