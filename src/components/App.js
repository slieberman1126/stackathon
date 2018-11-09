import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
import Restaurants from './Restaurants';
import { getRestaurants, getNeighborhoods } from '../store';
import Neighborhood from './Neighborhood';
import Neighborhoods from './Neighborhoods';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Switch>
            <Route exact path="/restaurants" component={Restaurants} />
            <Route path="/restaurants/:id" component={Restaurant} />
            <Route exact path="/neighborhoods" component={Neighborhoods} />} />
            <Route path="/neighborhoods/:id" component={Neighborhood} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(getNeighborhoods()).then(dispatch(getRestaurants())),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
