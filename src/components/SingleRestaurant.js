import React, { Component } from 'react';
import { Card, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class SingleRestaurant extends Component {
  render() {
    const { restaurant, neighborhoods } = this.props;
    const findNeighborhood = neighborhoods.find(
      neighborhood => neighborhood.id === restaurant.neighborhoodId
    );
    return (
      <Container>
        <Card>
          <Image src={restaurant.imageUrl} height="200px" width="400px" />
          <Card.Content>
            <Card.Header>
              <Link to={`/restaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </Card.Header>
            <Card.Meta>
              <span className="neighborhood">{findNeighborhood.name}</span>
            </Card.Meta>
            <Card.Description>Rated {restaurant.rating}</Card.Description>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}
const mapStateToProps = ({ neighborhoods }) => {
  return {
    neighborhoods,
  };
};
export default connect(mapStateToProps)(SingleRestaurant);
