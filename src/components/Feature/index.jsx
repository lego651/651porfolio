import React from 'react';

import Card from './Card/index.jsx'
import './style.css'

const Feature = () => {
  return(
    <div className="feature-container">
      <div className="feature-row row">
        <div className="card-wrapper">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Feature
