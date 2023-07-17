import React from 'react'

const FuncInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )}
)

export default FuncInput
