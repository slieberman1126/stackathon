import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <h1>Restaurants</h1>
        <ul>
          {restaurants.map(restaurant => {
            return (
              <li key={restaurant.id}>
                <Link to={`/restaurants/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ restaurants }) => {
  return {
    restaurants,
  };
};
export default connect(mapStateToProps)(Restaurants);
