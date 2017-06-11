import { combineReducers } from 'redux';

import * as State from '../state';

import {
    initialState as appInitialState,
    reducer as appReducer
} from './app';

export const initialState: State.Root = {
    app: appInitialState
};

export const reducers = combineReducers<State.Root>({
    app: appReducer
});