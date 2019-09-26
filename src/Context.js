import React, { useState } from 'react'

import FishSoup from './asset/Han-Kee-Fish-Soup-2.jpg'

const FoodContext = React.createContext()

export const Provider = (props) => {
    const order = {
        foodName: "Fish Soup + Rice ",
        cost: '$7.50',
        recipientName: "Eugene Tan",
        img: FishSoup,
        isPaid: false
      };

    const [state, setState] = useState(order)

    return (
        <FoodContext.Provider value={{ state, setState }}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodContext