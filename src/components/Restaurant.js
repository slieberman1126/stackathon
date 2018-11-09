import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <h1>{restaurant.name}</h1>
        <h2>
          <a target="_" href={restaurant.url}>
            URL TO WEBSITE
          </a>
        </h2>
        <Image
          src={restaurant.imageUrl}
          height="300px"
          width="300px"
          href={restaurant.url}
          target="_blank"
          bordered
        />
        <h3>
          Address: {restaurant.address} New York, NY {restaurant.zipcode}
        </h3>

        <h3>Rating: {restaurant.rating}</h3>
        <h3>Reviews: {restaurant.reviewCount}</h3>
        <h3>
          <Link to={`/neighborhoods/${restaurant.neighborhoodId}`}>
            Find more nearby
          </Link>
        </h3>
      </div>
    );
  }
}

const mapStateToProps = ({ neighborhoods, restaurants }, { match }) => {
  const restaurant = restaurants.find(s => s.id === match.params.id * 1);
  return {
    restaurant,
    neighborhoods,
  };
};
export default connect(mapStateToProps)(Restaurant);
