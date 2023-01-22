import React from 'react'
import Goal from './Goal';
import MissedGoal from './MissedGoal';

function Football(props) {

//     const shoot=()=>{
//         alert("shoot function invoked")
//     };
//     const shootWithParams = (a) =>{
//         alert(a);
//     };
//     const Add = (num1,num2) =>{
//         alert("Addition is: "+(num1+num2));
//     };
//   return (
//     <div>
//         <button onClick={shoot}>Shoot</button>
//         <button onClick={() => shootWithParams("Goal")}>Shoot Wirh Params</button>
//         <button onClick={() => Add(2,3)}>Add</button>
//     </div>
//   );


    console.log(props)
    const isGoal = props.isGoal;
    //isGoal ?{return <Goal/>} : <MissedGoal/>;
    // isGoal ? <Goal/> : <MissedGoal/>
    {/* //isGoal && <Goal/> */}

    return ( isGoal ? <Goal/> : <MissedGoal/>)

    
}

export default Football