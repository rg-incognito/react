import React, { useState } from 'react'

function Count() {
    const[count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
  return (
    <div>
        <button style={{alignContent:'center', width: '200px', height:'500px'}} onClick={increment}>{count}</button>
    </div>
  )
}

export default Count