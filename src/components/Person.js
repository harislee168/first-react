import React from 'react'

const Person = (props) => {
  console.log(props)
  return (
    <div>
      <h2>My name is {props.person.name} and I am {props.person.age} years old and my skill is {props.person.skill}</h2>
    </div>

  )
}

const Name = (props) => {
  return (
    <div>
      <h3>Hi may name is {props.name} and my id is {props.myId}</h3>
    </div>
  )
}

export default Person
export {Name}
