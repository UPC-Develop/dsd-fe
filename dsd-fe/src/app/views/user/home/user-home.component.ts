import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Boocking } from 'src/app/model/booking';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent {

  constructor(public router: Router) {

  }

  boocking: Boocking[] = [{bookingId: "A00001", productName: "Grass", starDdate: "30/10/2022", endDdate: "30/10/2022", quantity: 2, unitMeasurement: "h", currencySymbol: "S/.", amount: 60.50},
  {bookingId: "A00002", productName: "Loza", starDdate: "30/10/2022", endDdate: "30/10/2022", quantity: 2, unitMeasurement: "h", currencySymbol: "S/.", amount: 60.50}];

  displayedColumns: string[] = ['bookingId', 'productName', 'starDdate', 'endDdate', "quantity", "unitMeasurement", "currencySymbol", "amount"];
  dataSource = this.boocking;
    
  ngOnInit() {
  }

  ngNextForm(){
    this.router.navigate(['home/campus']);
  }
}
