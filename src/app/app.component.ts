import { Component, HostListener } from '@angular/core';
import { NgRedux, select/*Add select decorator*/} from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT, DECREMENT, RESET, HALF, DUPLICATE } from './actions';
import { Map } from 'immutable';

window.focus(); // make sure we are on this page before we start typing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Redux example with Keyboard events!!';
  @select(s => s.get('counter')) count; //state.get('counter')

  constructor(private ngRedux: NgRedux<Map<string,any>>){}

  increment() {
    //this.counter++; //Argument mutating
    this.ngRedux.dispatch({type: INCREMENT});
  }

  decrement() {
    this.ngRedux.dispatch({type: DECREMENT})
  }

  reset() {
    //this.counter++; //Argument mutating
    this.ngRedux.dispatch({type: RESET});
  }

  duplicate() {
    //this.counter++; //Argument mutating
    this.ngRedux.dispatch({type: DUPLICATE});
  }

  half() {
    //this.counter++; //Argument mutating
    this.ngRedux.dispatch({type: HALF});
  }

  /* a few examples */
  keyboardEvent: any;
  altKey: boolean;
  charCode: number;
  code: string;
  ctrlKey: boolean;
  keyCode: number;
  keyIdentifier: string;
  metaKey: boolean;
  shiftKey: boolean;
  timeStamp: number;
  type: string;
  which: number;

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.keyboardEvent = event;
    this.altKey = event.altKey;
    this.charCode = event.charCode;
    this.code = event.code;
    this.ctrlKey = event.ctrlKey;
    this.keyCode = event.keyCode;
    this.keyIdentifier = event.keyIdentifier;
    this.metaKey = event.metaKey;
    this.shiftKey = event.shiftKey;
    this.timeStamp = event.timeStamp;
    this.type = event.type;
    this.which = event.which;

    if (this.code == 'ArrowUp' || this.keyCode == 38)
    {
      this.increment();
    }
    else if (this.code == 'ArrowRight' || this.keyCode == 39)
    {
      this.duplicate();
    }
    else if (this.code == 'ArrowLeft' || this.keyCode == 37)
    {
      this.half();
    }
    else if (this.code == 'ArrowDown' || this.keyCode == 40)
    {
      this.decrement();
    }
    else if (this.code == 'KeyC' || this.keyCode == 67)
    {
      this.reset();
    }
  }
}
