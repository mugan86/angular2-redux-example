import { Component } from '@angular/core';
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
  valueZero: boolean = false;
  title = 'Angular 2 Redux example with Keyboard events!!';
  @select(s => s.get('counter')) count; //state.get('counter')
  action: string = "";

  constructor(private ngRedux: NgRedux<Map<string,any>>){}

  keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);

    this.makeActionFromKeyEvent(event[0], event[1]);
  }

  increment() {
    this.valueZero = false;
    this.ngRedux.dispatch({type: INCREMENT});
  }

  decrement() {
    this.valueZero = false;
    this.ngRedux.dispatch({type: DECREMENT})
  }

  reset() {
    console.log("Reset");
    //this.counter++; //Argument mutating
    this.ngRedux.dispatch({type: RESET});
   
  }

  duplicate() {
    console.log("Duplicate" +   this.ngRedux);
    this.action = "duplicate";
    if (this.count != 0) this.ngRedux.dispatch({type: DUPLICATE});
    else this.valueZero = true;
  }

  half() {
    if (this.count != 0) this.ngRedux.dispatch({type: HALF});
    else this.valueZero = true;
  }

  makeActionFromKeyEvent(code , keyCode )
  {
    if (code == 'ArrowUp' || keyCode == 38)
    {
      this.increment();
    }
    else if (code == 'ArrowRight' || keyCode == 39)
    {
      this.duplicate();
    }
    else if (code == 'ArrowLeft' || keyCode == 37)
    {
      this.half();
    }
    else if (code == 'ArrowDown' || keyCode == 40)
    {
      this.decrement();
    }
    else if (code == 'KeyC' || keyCode == 67)
    {
      this.reset();
    }
  }



  

}
