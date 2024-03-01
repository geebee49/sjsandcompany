import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='We approach your audit with a deep understanding of your business, the Industry in which you operate the risks of your company faces and the latest regulatory procedures in accordance with the prescribed procedures. We deliver high quality auditing services to our clients consistently. '
              text='Auditing Services'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='We provide with accounting services to clients to fulfil mandatory legal requirements such as financial reporting, and seeking advice on issues such as bookkeeping. Individuals also may be consumers of accountancy services.'
              text='Accounting Services'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='We will assist you in setting up your company,LLP and partnership firm and advice you on which structure would best suit your entity. We will guide you through the advantages and problems with every structure and can additionally get the business up and running for you.'
              text='Business Management Consultancy Services'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='We will assist you in filing Income Tax Returns of Individuals,Business Class Corporates, Partnership Firms,LLP and provide all the related services.'
              text='Income Tax'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='We provide you with various compliance services including GST Filing services ,TDS and TCS Services.'
              text='Compliance Services'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;