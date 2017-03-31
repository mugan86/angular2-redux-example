import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgRedux, NgReduxModule} from 'ng2-redux';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { fromJS, Map } from 'immutable';

import { IAppState, rootReducer, INITIAL_STATE} from './store';

//Reducers
import { campaigns } from './../reducers/campaign.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule.provideStore({
      campaigns
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<Map<string, any>>)
  {
    //Pass counter = 0 in state to change when change state in rootReducer of store.ts
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}
