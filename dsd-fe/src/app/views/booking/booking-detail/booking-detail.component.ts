import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoockingDetails } from 'src/app/model/bookingDetail';
import { OrderDetail } from 'src/app/model/order-details';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css'],
})
export class BookingDetailComponent {

  displayedColumns: string[] = ["start_hour", "end_hour", "bflag"];

  orderDetails: OrderDetail[] = [];

  campus_id!: number;
  product_id!: number;
  booking_date!: Date;
  booking_datePass!: string;
  status!: string;
  active: number = 1;

  dataSource: any;


  clickedRows = new Set<OrderDetail>();

  constructor(public dialogRef: MatDialogRef<BookingDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public orderDetail: OrderDetail, private orderService: OrderService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.campus_id = Number.parseInt(localStorage.getItem('campus_id') || '0');
    this.product_id = Number.parseInt(localStorage.getItem('campus_id') || '0');

    this.booking_datePass = localStorage.getItem('booking_date')?.toString() || new Date().toString()

    this.booking_date = new Date(this.booking_datePass) || new Date();

    this.status = localStorage.getItem('campus_id') || 'Cancelado';

    this.active = Number.parseInt(localStorage.getItem('campus_id') || '1');

    console.info(this.campus_id)
    console.info(this.product_id)
    console.info(this.booking_datePass)
    console.info(this.booking_date)
    console.info(this.status)
    console.info(this.active)


    this.orderService.getBookingOrders(this.campus_id , this.product_id, this.booking_date, this.status, this.active).subscribe((rest: any) => {
      this.orderDetails = rest.data;
      console.log(rest.data);
      this.dataSource = this.orderDetails;
    });
  }



}
