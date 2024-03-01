import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'
import {useState} from 'react';




function CardItem(props) {

  const [hidden, setHidden] = useState(true);


  return (
    <div onMouseEnter={() => setHidden(false)}
    onMouseLeave={() => setHidden(true)}>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {hidden? null:<p className='text-info-services'>{props.src}</p>}
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;