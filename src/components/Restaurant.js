import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Header, Rating } from 'semantic-ui-react';

import axios from 'axios';
class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    if (!this.props.restaurant) return null;
    const yelpId = this.props.restaurant.yelpId;
    this.getReviews(yelpId);
  }
  componentDidUpdate(prevState) {
    if (!this.props.restaurant) return null;
    if (prevState.reviews !== this.state.reviews) {
      return this.getReviews(this.props.restaurant.yelpId);
    }
  }
  getReviews(yelpId) {
    axios
      .get(`/api/yelp/${yelpId}`)
      .then(response => response.data)
      .then(reviews => this.setState({ reviews }));
  }
  render() {
    const { restaurant } = this.props;
    const { reviews } = this.state;
    if (!restaurant) return null;
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
        <Header as="h3">{reviews.length}</Header>
      </div>
    );
  }
}

const mapStateToProps = ({ neighborhoods, restaurants }, { match }) => {
  const restaurant = restaurants.find(rest => rest.id === match.params.id * 1);
  return {
    restaurant,
    neighborhoods,
  };
};

export default connect(mapStateToProps)(Restaurant);
