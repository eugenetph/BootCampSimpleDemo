import React, { Fragment } from 'react';
import './App.css';

//Building Component
const Building = () => {
  const grabFood = {
    foodName: "Fish Soup + Rice",
    cost: '$7.50',
    recipientName: "Eugene Tan"
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
  return <Floor7 grabFood={grabFood} />;
};

//Floor 7 Component
const Floor7 = ({ grabFood }) => {
  return (
    <Fragment>
      <h3>Welcome to Floor 7</h3>
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
