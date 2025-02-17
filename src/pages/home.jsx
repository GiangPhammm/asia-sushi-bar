import React, { Component } from 'react'
import {Teaser} from '../helpers/teaser/index';

class Home extends Component {
  render () {
    document.title ="Asia-Sushi-Bar - Asiatisches Restaurant in Berlin"; 
    document.querySelector('meta[name="description"]').content="Herzlich willkommen zu Asia-Sushi-Bar, asiatisches Restaurant in Berlin Adlershof. Wir bieten viele verschiedene asiatische Gerichte an. Auch zuhause kannst du einfach anrufen oder online bestellen, danach selbst abholen oder beliefern lassen.";
      
    return (
      <div className="main-content-container">
        <Teaser  
          type="center"
          headline="Asia Sushi Bar - Asiatisches Restaurant in Adlershof"
          text="Wir sind für euch IMMER DA ob Sommer, Winter, Regen, Schnee. Selbst zu dieser Krise, in guten wie in schlechten Zeiten. Jedenfalls von 11:00 Uhr bis 21:00 Uhr"
        />

        <div className="main-content-section">
          <iframe 
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.564899766626!2d13.533042315804202!3d52.43268097979773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8462fa1bbd3d1%3A0x6e3eee8ce9af1639!2sAsia%20Sushi%20Bar!5e0!3m2!1sen!2sde!4v1606838213512!5m2!1sen!2sde" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            style={{border:0}}
            aria-hidden="false" 
            tabIndex="0">
          </iframe>
        </div>
      </div>
    )
  }
}

export default Home