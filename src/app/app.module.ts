import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgRedux, NgReduxModule} from 'ng2-redux';
import { IAppState, rootReducer} from './store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>)
  {
    //Pass counter = 0 in state to change when change state in rootReducer of store.ts
    ngRedux.configureStore(rootReducer, { counter: 0});
  }
}
