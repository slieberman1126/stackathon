import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import { List, Header, Image } from 'semantic-ui-react';

class Neighborhood extends Component {
  render() {
    const { neighborhood, restaurants } = this.props;
    const findRestaurants = restaurants.filter(
      restaurant => restaurant.neighborhoodId === neighborhood.id
    );
    if (!neighborhood) return null;
    if (findRestaurants.length === 0) {
      return (
        <div>
          <Header as="h1">
            There are currently no reviews in {neighborhood.name}
          </Header>
          <Header as="h2">
            <Link to="/neighborhoods">Back</Link>
          </Header>
        </div>
      );
    }
    return (
      <div>
        <Header as="h1">Top Slice in {neighborhood.name}</Header>
        <List>
          {findRestaurants
            .sort(sortBy('rating', 'reviewCount'))
            .reverse()
            .map(restaurant => {
              return (
                <List.Item key={restaurant.id}>
                  <Image
                    avatar
                    src="https://news.bitcoin.com/wp-content/uploads/2017/05/Pizza-Slice-PNG-Image.png"
                  />
                  <List.Content>
                    <List.Header>
                      <Link to={`/restaurants/${restaurant.id}`}>
                        {restaurant.name}
                      </Link>
                    </List.Header>
                    <List.Description>
                      {restaurant.address} New York, NY {restaurant.zipcode}
                    </List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
        </List>
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
