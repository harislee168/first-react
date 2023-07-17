import React from 'react'

const Hero = (props) => {
  console.log(props)
  if (props.name === 'Joker') {
    throw new Error('Not a hero');
  }
  return (
    <div>{props.name}</div>
  )
}

export default Hero
