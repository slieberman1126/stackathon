import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ neighborhoods }) => {
  return (
    <div>
      <Link to="/neighborhoods">
        <h3>Neighborhoods ({neighborhoods.length})</h3>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ neighborhoods }) => {
  return {
    neighborhoods,
  };
};
export default connect(mapStateToProps)(Nav);
