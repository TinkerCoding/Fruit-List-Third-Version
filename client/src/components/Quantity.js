import React, { useState } from 'react';


const Quantity = ({ todo }) => {
  const [count, setCount] = useState(+todo.count);


  function decrementCount() {
    setCount(count - 1)
    updateCount(count - 1)
  }

  function incrementCount() {
   setCount(count + 1)
   updateCount(count + 1)
 }

  // edit count function 

  const updateCount = async (newCount)  => {
  console.log ("this is the newCount", newCount)  

  try {
     const body = { "newCount" : newCount}
     const response = await fetch(
      `http://localhost:5000/todos/${todo.todo_id}`,
       {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(body)
       }
     );
    
     window.location = "/";
   } catch (err) {
     console.error(err.message);
      
   }
  }



 //////////////////



 
 /////////////////////
  
  


 return (
  <>
    <button onClick={() => decrementCount(count)}>-</button>
    <span>{count}</span>
    <button onClick= {() => incrementCount(count)}>+</button>
    </> 
  )
  }
  

export default Quantity;