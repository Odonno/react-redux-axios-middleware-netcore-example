# react-redux-axios-middleware-netcore-example

Example of a react-redux frontend using redux-axios-middleware that calls a .NET Core Web API

## Front

The frontend is written in react with a redux architecture.
Actions and reducers can handle APi calls thank to redux-axios-middleware.

### Actions

Here is an example of a single action handling both request and response from the API.

> Request action

``` js
{
    type: 'API_CALL_NAME',
    payload: {
        request: AxiosRequestConfig
    }
}
```

> Response action

success action
``` js
{
    type: 'API_CALL_SUCCESS',
    payload: AxiosResponse
}
```

fail action
``` js
{
    type: 'API_CALL_FAIL',
    payload: AxiosResponse
}
```

### Reducers

> Request reducer

In general, you should avoid using request reducer to update the state.

Depending on your use cases, request reducer can be directly used to give the feeling that the request has already been handled by the server. In case it doesn't, the FAIL action should be used to alert the user that there was a failure. 

``` js
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
```

> Response reducer

``` js
case Actions.GET_VALUES_SUCCESS:
    return {
        ...state,
        values: action.payload.data
    };
```

## Back

The backend is written using ASP.NET Core. It simply contains API routes used by the frontend. 

## Example 1 : counter with increment/decrement actions

Example of a web app that use simple API requests : increment or decrement named values.