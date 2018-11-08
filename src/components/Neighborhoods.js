import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Neighborhoods extends Component {
  render() {
    const { neighborhoods } = this.props;
    return (
      <div>
        <h1>Neighborhoods</h1>
        <ul>
          {neighborhoods.map(neighborhood => {
            return (
              <li key={neighborhood.id}>
                <Link to={`/neighborhoods/${neighborhood.id}`}>
                  {neighborhood.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ neighborhoods }) => {
  return {
    neighborhoods,
  };
};
export default connect(mapStateToProps)(Neighborhoods);
