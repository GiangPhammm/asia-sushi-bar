import React, { Component } from 'react'
import ContactData from '../helpers/impressum/index';

class Impressum extends Component {
  render () {
    document.title ="Impressum"; 
    document.querySelector('meta[name="description"]').content="Restaurant webseite am PC/Mac, mobil am Smartphone, Tablet, Tab.";
    return (
      <div className="main-content-container">
        <ContactData></ContactData>
      </div>
    )
  }
}

export default Impressum