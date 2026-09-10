import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter.actions';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  // @Output()
  // incrementClicked: EventEmitter<void> = new EventEmitter<void>();
  // @Output()
  // decrementClicked: EventEmitter<void> = new EventEmitter<void>();
  // @Output()
  // resetClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store<{ counter : CounterState }>) {};

  onIncrement() {
    // this.incrementClicked.emit();
    this.store.dispatch(increment());
  }

  onDecrement() {
    // this.decrementClicked.emit();
    this.store.dispatch(decrement());
  }

  onReset() {
    // this.resetClicked.emit();
    this.store.dispatch(reset());
  }

}
