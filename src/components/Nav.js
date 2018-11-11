import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Image, Header } from 'semantic-ui-react';

const Nav = ({ neighborhoods, restaurants }) => {
  return (
    <Menu borderless>
      <Menu.Item>
        <Header as="h1">Pizza Time</Header>
      </Menu.Item>
      <Menu.Item position="right">
        <Link to="/">
          <Image
            size="tiny"
            src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmysteakout.com%2Fimages%2FCheese-Pizza.png&f=1"
          />
        </Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/neighborhoods">Neighborhoods ({neighborhoods.length})</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/restaurants">Restaurants ({restaurants.length})</Link>
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = ({ neighborhoods, restaurants }) => {
  return {
    neighborhoods,
    restaurants,
  };
};
export default connect(mapStateToProps)(Nav);
