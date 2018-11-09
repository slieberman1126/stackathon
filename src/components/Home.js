import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import sortBy from 'sort-by';
import SingleRestaurant from './SingleRestaurant';
class Home extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Grid columns={3} padded>
          {restaurants
            .sort(sortBy('rating', 'reviewCount'))
            .reverse()
            .map(restaurant => {
              return (
                <Grid.Column key={restaurant.id}>
                  <SingleRestaurant restaurant={restaurant} />
                </Grid.Column>
              );
            })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => {
  return {
    restaurants,
  };
};

export default connect(mapStateToProps)(Home);
