import React from 'react'

function B(props) {
    console.log(props)
  return (
    <div>
        <h1>Hello this is component B</h1>
        <h6>Data:{props.data}</h6>
        <h6>Array:{props.array1}</h6>
        <h6>Calling Function:{props.myFunc()}</h6>
    </div>
  );
}

export default B
