import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoockingDetails } from 'src/app/model/bookingDetail';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {

  selected!: Date;

  constructor(public router: Router, public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDetailComponent, {
      width: '600px',
      data: {name: this.selected/*, animal: this.animal*/},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit() {
    
  }

  ngNextForm(){
    this.router.navigate(['home/order-summary']);
  }

}
