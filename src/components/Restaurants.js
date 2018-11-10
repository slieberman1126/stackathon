import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, Header, Image } from 'semantic-ui-react';

class Restaurants extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Header as="h1">Restaurants</Header>
        <List>
          {restaurants.map(restaurant => {
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
const mapStateToProps = ({ restaurants }) => {
  return {
    restaurants,
  };
};
export default connect(mapStateToProps)(Restaurants);
