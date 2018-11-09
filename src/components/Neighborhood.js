import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Neighborhood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { neighborhood, restaurants } = this.props;
    const findRestaurants = restaurants.filter(
      restaurant => restaurant.neighborhoodId === neighborhood.id
    );
    return (
      <div>
        <h1>{neighborhood.name}</h1>
        <ul>
          {findRestaurants.map(restaurant => {
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

const mapStateToProps = ({ neighborhoods, restaurants }, { match }) => {
  const neighborhood = neighborhoods.find(s => s.id === match.params.id * 1);
  return {
    neighborhood,
    restaurants,
    neighborhoods,
  };
};
export default connect(mapStateToProps)(Neighborhood);
