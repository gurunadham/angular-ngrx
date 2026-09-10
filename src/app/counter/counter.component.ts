import { Component } from '@angular/core';
import { CounterValueComponent } from './counter-value/counter-value.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@Component({
  selector: 'app-counter',
  imports: [
    CounterValueComponent, 
    CounterButtonComponent,
    CustomInputComponent
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  // counter : number = 0;

  // incrementCount() {
  //   this.counter++;
  // }

  // decrementCount() {
  //   this.counter--;
  // }

  // resetCount() {
  //   this.counter = 0;
  // }

}
