import { Component } from '@angular/core';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  isLoggedIn:boolean = false;
  subscription!: Subscription;

  ngOnInit() {
   
  }

}
