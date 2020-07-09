import React from 'react';

import { Card } from '../card-pic/card-pic.component';

import './card.styles.css';

export const CardList = props => (
    <div className='card'>
      {props.prc6.map(prc => (
          <Card key={prc.id} prc={prc}/>
      ))}
    </div>
);