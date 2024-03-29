import React, { Fragment, useState } from 'react';
import './App.css';

import FishSoup from './asset/Han-Kee-Fish-Soup-2.jpg'

//Building Component
const Building = () => {
  const order = {
    foodName: "Fish Soup + Rice ",
    cost: '$7.50',
    recipientName: "Eugene Tan",
    img: FishSoup,
    isPaid: false
  };

  const [grabFood, setGrabFood] = useState(order)

  return <Floor1 grabFood={grabFood} setGrabFood={setGrabFood} />;
};

//Floor1 Component
const Floor1 = ({ grabFood, setGrabFood }) => {
  return <Floor2 grabFood={grabFood} setGrabFood={setGrabFood} />;
};

//Floor2 Component
const Floor2 = ({ grabFood, setGrabFood }) => {
  return <Floor3 grabFood={grabFood} setGrabFood={setGrabFood} />;
};

//Floor3 Component
const Floor3 = ({ grabFood, setGrabFood }) => {
  return <Floor12 grabFood={grabFood} setGrabFood={setGrabFood} />;
};

//Floor 7 Component
const Floor12 = ({ grabFood, setGrabFood }) => {
  return (
    <Fragment>
      <h3>Fish Soup Delivered to my house at floor 12</h3>
      <p>
        <strong>Food Name: </strong>
        {grabFood.foodName}
      </p>
      <p>
        <strong>Recipient Name: </strong>
        {grabFood.recipientName}
      </p>
      <p>
        <strong>Cost: </strong>
        {grabFood.cost}
      </p>
      <p>
        <strong>isPaid: </strong>
        {grabFood.isPaid ? 'Paid' : 'Not Paid'}
      </p>
      <p>
        <button onClick={() => setGrabFood({ ...grabFood, isPaid: true })}>Pay now</button>
      </p>
      <img src={grabFood.img} alt='fish soup' />
    </Fragment>
  );
};

function App() {
  const [isStart, setisStart] = useState(false)
  return (
    <div className="App">
      <h1>Simple Context API Demo using React Hooks</h1>
      {!isStart && <><p><strong>I love fish soup and craving for it so I order through grabFood app. Feel excited while waiting for it!</strong></p>
        <button onClick={() => setisStart(true)}>Start Deliver</button> </>}
      {isStart && <Building />}
    </div>
  );
}

export default App;
