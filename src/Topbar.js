import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import headline1 from './img/headline1.png';
import headline2 from './img/headline2.png';
import headline3 from './img/headline3.png';
import headline4 from './img/headline4.png';
import headline5 from './img/headline5.png';
import Container from '@material-ui/core/Grid';

import './Topbar.css';

function Topmainbar() {
  const cards = [
  {number:1000,head: 'Headline1',logo: headline1},
  {number:837,head: 'Headline2',logo: headline2},
  {number:342,head: 'Headline3',logo: headline3},
  {number:473,head: 'Headline4',logo: headline4},
  {number:123,head: 'Headline5',logo: headline5},]
  return (
    <div className="topMainBar">
      <div className='barDesign'>

        {cards.map((card,i)=> 
          <Container key={i} fixed='true'>
            <div className='cardWrapper'>
          <Card key={i} class='card'>
            <CardContent>
              <div><img className='mainIcon' src={card.logo} alt=''/><span className='number'>{card.number}</span><div>{card.head}</div></div>
            </CardContent>
             </Card>
            </div>
          </Container>
    )}
     </div>
    </div>
  );
}

export default Topmainbar;
