import React from 'react'
import Person from './Person.js'

const persons = [
  {
    id: 1,
    name: 'Bruce',
    age: 30,
    skill: 'react'
  },
  {
    id: 2,
    name: 'Clark',
    age: 37,
    skill: 'vue'
  },
  {
    id: 3,
    name: 'Diana',
    age: 26,
    skill: 'angular'
  }
]
const personList = persons.map(person => <Person key={person.id} person={person} />)
const ListRender = () => {
  return (
    <div>
      {personList}
    </div>
  )
}
export default ListRender
