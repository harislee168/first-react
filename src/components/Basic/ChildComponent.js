import React from 'react'

const ChildComponent = (props) => {
  const {handler} = props
  return (
    <div>
      <button onClick={() => handler('Boy', 'Girl')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
