import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { getToggle } from '../states/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule, AsyncPipe],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent implements OnInit {

  constructor(private store: Store<AppState>) { 
  }

  customInputValue: number = 0;
  showCustomInput$: Observable<boolean> | null = null;

  ngOnInit() {
    // this.store.select(getToggle).subscribe((toggle) => {
    //   console.log('toggle observable called' + toggle);
    //   this.showCustomInput = toggle;
    // });

    this.showCustomInput$ = this.store.select(getToggle);
  }


  customIncrementCount() {
    this.store.dispatch(customIncrement({ value: +this.customInputValue }));
     this.customInputValue = 0;
  }

   onToggleClicked() {
    this.store.dispatch(toggleCustomInput());
   
  }
}
