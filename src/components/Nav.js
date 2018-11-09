import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ neighborhoods, restaurants }) => {
  return (
    <div>
      <Link to="/neighborhoods">
        <h3>Neighborhoods ({neighborhoods.length})</h3>
      </Link>
      <Link to="/restaurants">
        <h3>Restaurants ({restaurants.length})</h3>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ neighborhoods, restaurants }) => {
  return {
    neighborhoods,
    restaurants,
  };
};
export default connect(mapStateToProps)(Nav);
