import React from 'react'

const Person = (props) => {
  console.log(props)
  return (
    <ul>
      <li>My name is {props.person.name} and I am {props.person.age} years old and my skill is {props.person.skill}</li>
    </ul>

  )
}

export default Person
