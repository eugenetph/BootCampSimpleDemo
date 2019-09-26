import React, { Fragment, useState, useContext } from 'react';
import './App.css';

import FoodContext, { Provider } from './Context'

//Building Component
const Building = () => {

  return <Provider><Floor1 /></Provider>;
};

//Floor1 Component
const Floor1 = () => {
  return <Floor2 />;
};

//Floor2 Component
const Floor2 = () => {
  return <Floor3 />;
};

//Floor3 Component
const Floor3 = () => {
  return <Floor12 />;
};

//Floor 7 Component
const Floor12 = () => {
  const context = useContext(FoodContext)
  return (
    <Fragment>
      <h3>Fish Soup Delivered to my house at floor 12</h3>
      <p>
        <strong>Food Name: </strong>
        {context.state.foodName}
      </p>
      <p>
        <strong>Recipient Name: </strong>
        {context.state.recipientName}
      </p>
      <p>
        <strong>Cost: </strong>
        {context.state.cost}
      </p>
      <p>
        <strong>isPaid: </strong>
        {context.state.isPaid ? 'Paid' : 'Not Paid'}
      </p>
      <p>
        <button onClick={() => context.setState({...context.state, isPaid: true})}>Pay now</button>
      </p>
      <img src={context.state.img} alt='fish soup' />

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
