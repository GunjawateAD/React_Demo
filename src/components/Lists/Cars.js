import React from 'react'
import Garage from './Garage';

function Cars() {

    const cars = [
        {id: 1, brand: "Ford"},
        {id: 2, brand: "BMW"},
        {id: 3, brand: "i20"},
        {id: 4, brand: "Audi"},
    ];
  return (
    <div>
        <ul>
            {/* if id is not present then use index as key */}
            {cars.map((car, index) => (
                <Garage key={index} id={car.id} brand={car.brand} />
            ))}

             {/* if id is present then use id as key */}
             {cars.map((car) => (
                <Garage key={car.id} id={car.id} brand={car.brand} />
            ))}
        </ul>
    </div>
  )
}

export default Cars