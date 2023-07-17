import React from 'react'


const FunctionClick = () => {

  const clickHandler = () => {
    return(
      console.log('I am clicked')
    )
  }

  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default FunctionClick
