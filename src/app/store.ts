import { Map } from 'immutable';
import {tassign} from 'tassign';
import { INCREMENT, DECREMENT } from './actions';
export interface IAppState
{
    //To use in counter
    counter: number;
    messaging?: {
        newMessages: number;
    }
}

export interface ITodoApp
{
    id: number;
    text: string;
}

export const INITIAL_STATE : IAppState = {
    counter : 0,
    messaging: {
        newMessages: 5
    }
}

export const INITIAL_STATE_2 : ITodoApp = {
    id : 1,
    text: ""
}

//Different states to make actions
export function rootReducer(state:Map<string,any>, action):Map<string,any>
{
    switch(action.type) {
        case INCREMENT: 
            state.set('isOnline', true);
            //return { counter: state.counter + 1}
            //return Object.assign({}, state, {counter: state.counter + 1, isOnline: true});
            //return tassign( state, {counter: state.counter + 1}); //NOt running correct after import Map immutable
            return state.set('counter', state.get('counter') + 1);
        case DECREMENT:
            state.set('isOnline', true);
            return state.set('counter', state.get('counter') - 1);
    }
    return state;
}