import React from 'react'

function Grocery() {
    const items=[
        {id:1, name:"bread", quantity:2},
        {id:2, name:"eggs", quantity:3},
        {id:3, name:"milk", quantity:4},
        {id:4, name:"butter", quantity:7},
    ];
  return (
    <div>
        <h1>Grocery List</h1>
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.id + " " + item.name + " " + item.quantity}
                </li>
            ))}
        </ul>    
    </div>
  );
}

export default Grocery