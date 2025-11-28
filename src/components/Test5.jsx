import React from 'react'

const Test5 = ({details}) => {
    const {name,branch,place} = details
  return (
    <div>
        <p>name is :{name}</p>
        <p>branch is :{branch}</p>
        <p>place is :{place}</p>
    </div>
  )
}

export default Test5