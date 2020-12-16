import React, { Component } from 'react'
import Gallery from '../helpers/gallery/index'

class Catering extends Component {
  render () {
    document.title ="Catering bei Asia-Sushi-Bar"; 
    document.querySelector('meta[name="description"]').content="Catering verfügbar!";
    return (
      <div className="main-content-container">
        
        <Gallery></Gallery>
      </div>
    )}
}

export default Catering