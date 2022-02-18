import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampusService } from 'src/app/service/campus.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css'],
})
export class CampusComponent {

  campus: any = [];
  campus_id: any;

  constructor(public router: Router, private campusService: CampusService) {

  }

  ngOnInit() {

    this.campusService.getCampus().subscribe((rest: any) => {
      this.campus = rest.data;
      console.log(rest.data);
    });

  }

  ngNextForm(){

    console.info(document.getElementById('myDOMElement'));
    this.router.navigate(['home/product']);
  }

}
