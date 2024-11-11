import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = 'Welcome to the Home Page!';
  counter = 0;

  incrementCounter() {
    this.counter++;
  }
}
