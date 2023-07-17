import React from 'react'

const MemoComp = (props) => {
  console.log('Memo Comp function')
  return (
    <div>
      Memo Comp: {props.name}
    </div>
  )
}

export default React.memo(MemoComp)
