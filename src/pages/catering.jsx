import React, { Component } from 'react'
import Gallery from '../helpers/gallery/index'
import {Link} from '../helpers/link/index'
import partners from '../assets/json/partners.json'

var items = partners.items;

class Catering extends Component {
  render () {
    document.title ="Catering bei Asia-Sushi-Bar"; 
    document.querySelector('meta[name="description"]').content="Catering verfügbar!";
    return (
      <div className="main-content-container">
        <Gallery></Gallery>
        <div className="main-content-section">
          <h2 className="main-content-title">Partnerunternehmen</h2>
          <div className="list">
            {
              items.map((item) => {
                return (
                  <div key={item.name}
                      className="list-item">
                    <Link
                      link_url={item.url} 
                    >
                      {item.name}
                    </Link>
                    {item.add ? <p>{item.add}</p> : null}
                    {item.tel ? <p>{item.tel}</p> : null}
                    
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )}
}

export default Catering