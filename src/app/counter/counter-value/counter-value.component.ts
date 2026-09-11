import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../states/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-value',
  imports: [AsyncPipe],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.css'
})
export class CounterValueComponent implements OnInit {
  //  @Input() count: number = 0;
  //  counterValue: number = 0;

  constructor(
    private store: Store<AppState>
  ) {}

  counter$: Observable<number> | null = null;
  // counterSubscription: Subscription | null = null;

  ngOnInit() {

    // this.counterSubscription = this.store.select(getCounter).subscribe((counter) => {
    //   console.log('Counter value observable called' + counter);
    //   this.counter = counter;
    // });

    this.counter$ = this.store.select(getCounter);
  }


  // ngOnDestroy() {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // } 

}
