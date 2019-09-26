import React, { Fragment } from 'react';
import './App.css';

import FishSoup from './asset/Han-Kee-Fish-Soup-2.jpg'

//Building Component
const Building = () => {
  const grabFood = {
    foodName: "Fish Soup + Rice",
    cost: '$7.50',
    recipientName: "Eugene Tan",
    img: FishSoup
  };
  return <Floor1 grabFood={grabFood} />;
};

//Floor1 Component
const Floor1 = ({ grabFood }) => {
  return <Floor2 grabFood={grabFood} />;
};

//Floor2 Component
const Floor2 = ({ grabFood }) => {
  return <Floor3 grabFood={grabFood} />;
};

//Floor3 Component
const Floor3 = ({ grabFood }) => {
  return <Floor12 grabFood={grabFood} />;
};

//Floor 7 Component
const Floor12 = ({ grabFood }) => {
  return (
    <Fragment>
      <h3>Welcome to my house at floor 12</h3>
      <p>
        <strong>Food Name: </strong>
        {grabFood.foodName}
      </p>
      <p>
        <strong>Recipient Name: </strong>
        {grabFood.recipientName}
      </p>
      <p>
        <strong>Package: </strong>
        {grabFood.cost}
      </p>
      <img src={grabFood.img} alt='fish soup'/>
    </Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Simple Context API Demo using Hook(useState)</h1>
      <Building />
    </div>
  );
}

export default App;
