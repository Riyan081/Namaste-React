import {useState} from 'react';


const User =  ({name}) =>{
    const[count,setCount] = useState(0);
    const[count2,setCount2] = useState(1);



    useEffect(()=>{
   //api call
  const timer =  setInterval(()=>{
 console.log("hi"); //so iska issue ye hai ke na agar ye page se dusre page main jayenge to bhe iske call lagte rahenge and performance issue hoga so uske liye na 
   },1000);

   return()=>{
    clearInterval(timer);
//this fun is used to stop that  after you leave this page this will get called 
   }


    });
return  (
<div className = "user-card">
    <h1>count = {count}</h1>
    <h1>count = {count2}</h1>
    <h2>Name: {name}</h2>
    <h3>Location</h3>
    <h4>Contact: @akshaymarch7</h4>

</div>

);
};

export default User;