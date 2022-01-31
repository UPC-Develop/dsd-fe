import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoockingDetails } from 'src/app/model/bookingDetail';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css'],
})
export class BookingDetailComponent {

  boockingDetails: BoockingDetails[] = [{ bookingDetailId: 1, starDdate: "30/10/2022", endDdate: "30/10/2022", startHour: "9:00", endHour: "10:00" },
  { bookingDetailId: 2, starDdate: "30/10/2022", endDdate: "30/10/2022", startHour: "10:00", endHour: "11:00" },
  { bookingDetailId: 3, starDdate: "30/10/2022", endDdate: "30/10/2022", startHour: "12:00", endHour: "13:00" },
  { bookingDetailId: 4, starDdate: "30/10/2022", endDdate: "30/10/2022", startHour: "14:00", endHour: "15:00" },
  { bookingDetailId: 5, starDdate: "30/10/2022", endDdate: "30/10/2022", startHour: "16:00", endHour: "17:00" },
  { bookingDetailId: 6, starDdate: "30/10/2022", endDdate: "30/10/2022", startHour: "18:00", endHour: "19:00" }];

  displayedColumns: string[] = ['bookingDetailId', "startHour", "endHour"];
  dataSource = this.boockingDetails;

  clickedRows = new Set<BoockingDetails>();

  constructor(
    public dialogRef: MatDialogRef<BookingDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BoockingDetails,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
