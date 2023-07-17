import React from 'react'

// function Greet() {
//   return <h1>Hello World 2</h1>
// }

const Greet = (props) => {
  console.log(props)
  const {fname, lname, children} = props
  return (
    <div>
      <h1>Hello World {fname} {lname}</h1>
      {children}
    </div>

  )
}

const Greet2 = ({fname, lname, children}) => {
  return (
    <div>
      <h1>Hello World {fname} {lname}</h1>
      {children}
    </div>

  )
}

export {Greet, Greet2}
