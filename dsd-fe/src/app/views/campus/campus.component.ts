import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css'],
})
export class CampusComponent {

  constructor(public router: Router) {

  }

  ngOnInit() {
    
  }

  ngNextForm(){
    this.router.navigate(['home/product']);
  }

}
