import React from 'react';

import './style.css'

const cards = [
  { skill: 'Front End', skill1: 'HTML', skill2: 'CSS' },
  { skill: 'Server', skill1: 'NodeJS', skill2: 'Python' },
  { skill: 'Database', skill1: 'mySQL', skill2: 'MongoDB' },
  { skill: 'Deployment', skill1: 'Docker', skill2: 'System Design' }
]


class Card extends React.Component{
    render(){
      const cardsElements = [] // 保存每个渲染以后 JSX 的数组
    for (let card of cards) {
      cardsElements.push( // 循环每个用户，构建 JSX，push 到数组中
        <div className="col-lg-2 card-container">
          <i className="fa fa-chrome"></i>
          <h2>{card.skill}</h2>
          <ul>
              <li>{card.skill1}</li>
              <li>{card.skill2}</li>
          </ul>
        </div>
      )
    }

    return (
      <div>{cardsElements}</div>
    )
      // return(
      //   <div className="card-container">
      //     <i className="fa fa-chrome"></i>
      //     <h2> FRONT END </h2>
      //     <ul>
      //       <li> HTML5 </li>
      //       <li> HTML5 </li>
      //       <li> HTML5 </li>
      //       <li> HTML5 </li>
      //     </ul>
      //   </div>
      // );
    }
}



export default Card;
