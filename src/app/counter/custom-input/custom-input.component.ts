import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../states/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent implements OnInit {

  constructor(private store: Store<{ counter: CounterState }>) { 
  }

  customInputValue: number = 0;
  showCustomInput: boolean = false;

  ngOnInit() {
    this.store.select('counter').subscribe((state) => {
      console.log(' state :', state);
      this.showCustomInput = state.toggle;
    });
  }


  customIncrementCount() {
    this.store.dispatch(customIncrement({ value: +this.customInputValue }));
  }

   onToggleClicked() {
    this.store.dispatch(toggleCustomInput());
  }
}
