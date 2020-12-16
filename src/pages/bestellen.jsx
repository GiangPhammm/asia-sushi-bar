import React, { Component } from 'react'
import OptionItems from '../helpers/option/index';

class Order extends Component {
  render () {
    document.title ="Bestellungsmöglichkeiten bei Asia-Sushi-Bar"; 
    document.querySelector('meta[name="description"]').content="Bestellen bei uns ist ganz einfach mit einem Anruf oder mit der Online-Bestellung. Lieferservice verfügbar.";
    return (
      <div className="main-content-container">
        <h2 className="main-content-subtitle">
          <p>Liebe Gäste, wir freuen uns, Ihnen täglich von 11 bis 21 Uhr Abholung und Lieferung anbieten zu können!</p> 
          <p>Schauen Sie sich unsere Speisekarte an und genießen Sie!</p>
        </h2>
        <OptionItems></OptionItems>
      </div>
    )
  }
}

export default Order