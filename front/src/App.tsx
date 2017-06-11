import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import * as State from './state';

import {
  getValues,
  increment,
  decrement
} from './actions/app';

interface OwnProps {

}

interface StateFromProps {
  values: { name: string, value: number }[];
}

interface DispatchFromProps {
  loadValues(): void;
  handleIncrementClick(valueName: string): void;
  handleDecrementClick(valueName: string): void;
}

class App extends React.Component<OwnProps & StateFromProps & DispatchFromProps, void> {
  componentWillMount() {
    this.props.loadValues();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.values.map(v => {
            return (
              <li key={v.name}>
                <div>{v.name}</div>
                <div>{v.value}</div>
                <button onClick={() => this.props.handleIncrementClick(v.name)}>+</button>
                <button onClick={() => this.props.handleDecrementClick(v.name)}>-</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: State.Root): StateFromProps => ({
  values: state.app.values
});

const mapDispatchToProps = (dispatch: Dispatch<State.Root>): DispatchFromProps => ({
  loadValues: () => {
    dispatch(getValues());
  },
  handleIncrementClick: (valueName: string) => {
    dispatch(increment(valueName));
  },
  handleDecrementClick: (valueName: string) => {
    dispatch(decrement(valueName));
  }
});

export default connect<StateFromProps, DispatchFromProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
