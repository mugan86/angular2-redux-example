import { INCREMENT } from './actions';
export interface IAppState
{
    //To use in counter
    counter: number;
}

//Different states to make actions
export function rootReducer(state:IAppState, action):IAppState
{
    switch(action.type) {
        case 'INCREMENT': return { counter: state.counter + 1}
    }
    return state;
}