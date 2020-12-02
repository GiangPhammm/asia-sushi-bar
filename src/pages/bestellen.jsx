import React, { Component } from 'react'
import OptionItems from '../helpers/option/index';

class Order extends Component {
    render () {
        return (
          <div className="main-content-container">
            <h1 className="main-content-subtitle">
              <p>Liebe Gäste, wir freuen uns, Ihnen täglich von 11 bis 21 Uhr Abholung und Lieferung anbieten zu können!</p> 
              <p>Schauen Sie sich unsere Speisekarte an und genießen Sie!</p>
            </h1>
            <OptionItems></OptionItems>
          </div>
        )
    }
}

export default Order