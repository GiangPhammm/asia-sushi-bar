import React, { Component } from 'react'
import PolicyData from '../helpers/privacypolicy/index';

class Policy extends Component {
  render () {
    return (
      <div className="main-content-container">
        <PolicyData></PolicyData>
      </div>
    )
  }
}

export default Policy
