import React from 'react';

import logo from '../../img/programming_lang.png'
import './style.css'

const Desc = () => {
  return(
    <div className="desc-container">
      <h1> FRONT END FOCUSED <br/> WITH FULL STACK EXPERIENCE</h1>
      <div className="row">
        <div className="col-md-6 left">
          <div className="content">
            <h2> Experienced Front End developer </h2>
            <p> With more than three years in front end development, I am very familiar with agile development and modern front end frameworks. I like building SPA web applications with React - Redux architecture. </p>
            <h2> Keen on lifelong learning </h2>
            <p> I am very self-motivated and currently leveraging new AI, deep learning technology to accomplish impossible tasks.  </p>
          </div>
        </div>
        <div className="col-md-6 right">
          <img src={logo} />
        </div>
      </div>
    </div>
  )
}

export default Desc
