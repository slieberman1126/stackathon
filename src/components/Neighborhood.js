import React, { Component } from 'react';
import { connect } from 'react-redux';

class Neighborhood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { neighborhood } = this.props;
    return (
      <div>
        <h1>{neighborhood.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ neighborhoods }, { match }) => {
  const neighborhood = neighborhoods.find(s => s.id === match.params.id * 1);
  return {
    neighborhood,
  };
};
export default connect(mapStateToProps)(Neighborhood);
