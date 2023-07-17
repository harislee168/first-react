import React from 'react'
import Person, {Name} from './Person.js'

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
const names = ['Bruce', 'Clark', 'Diana', 'Hendry']
const personList = persons.map(person => <Person key={person.id} person={person} />)
//last resort to use the index as a key. Only work for static list if require addition and sort, this will break
const nameList = names.map((name, id) => <Name key={id} name={name} myId={id}/>)
const ListRender = () => {
  return (
    <div>
      {personList}
    </div>
  )
}

const NameRender = () => {
  return (
    <div>
      {nameList}
    </div>
  )
}
export default ListRender
export {NameRender}
