import { Component } from '@angular/core';
import { NgRedux} from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>){
    ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
      var store = ngRedux.getState();
      this.counter = store.counter;
    })
  }
  increment() {
    //this.counter++; //Argument mutating
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
