import React, { Component } from 'react'
import ContactData from '../helpers/impressum/index';

class Impressum extends Component {
  render () {
    return (
      <div className="main-content-container">
        <ContactData></ContactData>
      </div>
    )
  }
}

export default Impressum