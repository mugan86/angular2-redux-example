import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgRedux, NgReduxModule} from 'ng2-redux';

import { fromJS, Map } from 'immutable';

import { IAppState, rootReducer, INITIAL_STATE} from './store';

import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent
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
  constructor(ngRedux: NgRedux<Map<string, any>>)
  {
    //Pass counter = 0 in state to change when change state in rootReducer of store.ts
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}
