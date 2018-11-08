import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
import Restaurants from './Restaurants';
import { getRestaurants } from '../store';

class App extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/api/restaurants" component={Restaurants} />
          <Route path="/api/restaurants/:id" component={Restaurant} />
        </Switch>
      </Router>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
