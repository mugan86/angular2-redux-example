import { Component } from '@angular/core';
import { NgRedux, select/*Add select decorator*/} from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT, DECREMENT, RESET, HALF, DUPLICATE } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
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
}
