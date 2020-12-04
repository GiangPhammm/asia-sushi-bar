import React, { Component } from 'react'
import PolicyData from '../helpers/privacypolicy/index';

class Policy extends Component {
  render () {
    document.title ="Datenschutzerklärung"; 
    document.querySelector('meta[name="description"]').content="Restaurant webseite am PC/Mac, mobil am Smartphone, Tablet, Tab.";
    return (
      <div className="main-content-container">
        <PolicyData></PolicyData>
      </div>
    )
  }
}

export default Policy
