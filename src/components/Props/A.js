import React from 'react'
import B from './B'

function A() {
    let name = "pooja"
    let array1 = [1,2,4,5,6]
    function print()
    {
        console.log("Hie")
    }
  return (
    <div>
        <h1>Hello this is component A</h1>
        <B data={name} array1={array1} myFunc={print}></B>
    </div>
  )
}

export default A