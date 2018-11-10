import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Header, Rating } from 'semantic-ui-react';
class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <Header as="h1">{restaurant.name}</Header>

        <Image
          src={restaurant.imageUrl}
          height="300px"
          width="300px"
          href={restaurant.url}
          target="_blank"
          bordered
        />
        <Header as="h2">
          <a target="_" href={restaurant.url}>
            URL TO WEBSITE
          </a>
        </Header>
        <Header as="h3">
          Address: {restaurant.address} New York, NY {restaurant.zipcode}
        </Header>

        <Rating icon="star" defaultRating={restaurant.rating} maxRating={5} />
        <Header as="h3">Reviews: {restaurant.reviewCount}</Header>
        <Header as="h3">
          <Link to={`/neighborhoods/${restaurant.neighborhoodId}`}>
            Find more nearby
          </Link>
        </Header>
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
