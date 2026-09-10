import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.css'
})
export class CounterValueComponent {
  //  @Input() count: number = 0;
  //  counterValue: number = 0;

  constructor(
    private store: Store<{ counter: CounterState}>
  ) {}

  counter : number = 0;
  counterSubscription: Subscription | null = null;

  ngOnInit() {
    this.counterSubscription = this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }


  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  } 

}
