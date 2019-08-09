import React from 'react';
import './main.css';
import Workertable from './Table';
import Topmainbar from './Topbar';

function Main() {
  return (
    <div className="main">
       <Topmainbar/>
       <Workertable/>

    </div>
  );
}

export default Main;
