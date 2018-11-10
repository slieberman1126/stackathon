import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, Header } from 'semantic-ui-react';

class Neighborhoods extends Component {
  render() {
    const { neighborhoods, restaurants } = this.props;

    return (
      <div>
        <Header as="h1">Neighborhoods</Header>
        <List>
          {neighborhoods.map(neighborhood => {
            return (
              <List.Item key={neighborhood.id}>
                <List.Icon name="marker" />
                <List.Content>
                  <List.Header>
                    <Link to={`/neighborhoods/${neighborhood.id}`}>
                      {neighborhood.name}
                    </Link>
                  </List.Header>
                  <List.Description>
                    {
                      restaurants.filter(
                        restaurant =>
                          restaurant.neighborhoodId === neighborhood.id
                      ).length
                    }
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
const mapStateToProps = ({ neighborhoods, restaurants }) => {
  return {
    neighborhoods,
    restaurants,
  };
};
export default connect(mapStateToProps)(Neighborhoods);
