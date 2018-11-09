import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Sticky, Image } from 'semantic-ui-react';

const Nav = ({ neighborhoods, restaurants }) => {
  return (
    <Sticky>
      <Menu borderless>
        <Menu.Item position="right">
          <Link to="/">
            <Image
              size="tiny"
              src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmysteakout.com%2Fimages%2FCheese-Pizza.png&f=1"
            />
          </Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/neighborhoods">
            Neighborhoods ({neighborhoods.length})
          </Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/restaurants">Restaurants ({restaurants.length})</Link>
        </Menu.Item>
      </Menu>
    </Sticky>
  );
};

const mapStateToProps = ({ neighborhoods, restaurants }) => {
  return {
    neighborhoods,
    restaurants,
  };
};
export default connect(mapStateToProps)(Nav);
