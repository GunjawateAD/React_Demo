import React from 'react'

function FruitBasket(props) {
  return (
    <div>FruitBasket
        {props.fruits.length > 0 &&(
            <h2>You Have {props.fruits.length} fruits in basket</h2>
        )}
    </div>
  )
}

export default FruitBasket