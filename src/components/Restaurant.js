import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Header, Rating, Feed, Icon, Grid } from 'semantic-ui-react';

import axios from 'axios';
class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
    //this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    if (!this.props.restaurant) return null;
    const yelpId = this.props.restaurant.yelpId;
    this.getReviews(yelpId);
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
    if (!reviews) return null;
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image
                src={restaurant.imageUrl}
                height="500px"
                width="300px"
                href={restaurant.url}
                target="_blank"
                bordered
              />
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">{restaurant.name}</Header>
              <Header as="h3">
                To website:
                <a target="_" href={restaurant.url}>
                  {restaurant.url.slice(0, 30)}
                </a>
              </Header>
              <Header as="h3">
                Address: {restaurant.address} New York, NY {restaurant.zipcode}
              </Header>
              <Header as="h3">
                Average rating:{'  '}
                <Rating
                  icon="star"
                  defaultRating={restaurant.rating}
                  maxRating={5}
                />
                {'  '}({restaurant.rating})
              </Header>
              <Header as="h3">Reviews: {restaurant.reviewCount}</Header>
              <Header as="h3">
                <Link to={`/neighborhoods/${restaurant.neighborhoodId}`}>
                  Find more nearby
                </Link>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header as="h3">Reviews</Header>
        <Feed>
          {reviews.map(review => {
            console.log(review);
            return (
              <Feed.Event key={review.id}>
                <Feed.Label image={review.user.image_url} />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>{review.user.name}</Feed.User>
                    <Feed.Date>{review.time_created}</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>{review.text}</Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            );
          })}
        </Feed>
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
