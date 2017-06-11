import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Action =
    {
        type: 'APP_GET_VALUES',
        payload: {
            request: AxiosRequestConfig
        }
    } | {
        type: 'APP_GET_VALUES_SUCCESS',
        payload: AxiosResponse
    } | {
        type: 'APP_INCREMENT',
        payload: {
            request: AxiosRequestConfig
        }
    } | {
        type: 'APP_DECREMENT',
        payload: {
            request: AxiosRequestConfig
        }
    };

export const GET_VALUES = 'APP_GET_VALUES';
export const GET_VALUES_SUCCESS = 'APP_GET_VALUES_SUCCESS';
export const GET_VALUES_FAIL = 'APP_GET_VALUES_FAIL';
export const getValues = (): Action => ({
    type: GET_VALUES,
    payload: {
        request: {
            url: '/values'
        }
    }
});

export const INCREMENT = 'APP_INCREMENT';
export const INCREMENT_SUCCESS = 'APP_INCREMENT_SUCCESS';
export const INCREMENT_FAIL = 'APP_INCREMENT_FAIL';
export const increment = (valueName: string): Action => ({
    type: INCREMENT,
    payload: {
        request: {
            method: 'POST',
            url: '/values/increment',
            data: {
                valueName
            }
        }
    }
});

export const DECREMENT = 'APP_DECREMENT';
export const DECREMENT_SUCCESS = 'APP_DECREMENT_SUCCESS';
export const DECREMENT_FAIL = 'APP_DECREMENT_FAIL';
export const decrement = (valueName: string): Action => ({
    type: DECREMENT,
    payload: {
        request: {
            method: 'POST',
            url: '/values/decrement',
            data: {
                valueName
            }
        }
    }
});