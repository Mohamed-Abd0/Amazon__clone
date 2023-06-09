import React from 'react'
import TextSpan from '../ReuseableComponets/TextSpan' 

const ChangeBtn = ({children, onAction}) => {
  return (
    <div>
      <TextSpan ActionFn={onAction}>{children}</TextSpan>
    </div>
  )
}

export default ChangeBtn
