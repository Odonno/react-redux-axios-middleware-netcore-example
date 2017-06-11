import { Action } from '../actions/app';
import * as Actions from '../actions/app';
import * as State from '../state';

export const initialState: State.App = {
    values: []
};

export const reducer = (state: State.App = initialState, action: Action): State.App => {
    switch (action.type) {
        case Actions.GET_VALUES_SUCCESS:
            return {
                ...state,
                values: action.payload.data
            };

        case Actions.INCREMENT:
            return {
                ...state,
                values: state.values.map(v => {
                    if (v.name === action.payload.request.data.valueName) {
                        return {
                            ...v,
                            value: v.value + 1
                        };
                    }

                    return v;
                })
            };

        case Actions.DECREMENT:
            return {
                ...state,
                values: state.values.map(v => {
                    if (v.name === action.payload.request.data.valueName) {
                        return {
                            ...v,
                            value: v.value - 1
                        };
                    }

                    return v;
                })
            };

        default: return state;
    }
};