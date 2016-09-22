import './home-page.scss';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class HomePage extends Component {

  static propTypes = {
    browser: PropTypes.object.isRequired
  };


  render() {
    const { browser } = this.props;
    return (
      <div className="o-page">
        <Link key={'ackack'} to={`ackack`}>
            <h1>ackack</h1>
        </Link>
      </div>
    );
  }
}


export default connect(({ browser }) => ({
  browser,
}))(HomePage);
