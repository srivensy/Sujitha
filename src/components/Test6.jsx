import React from 'react'

const Test6 = ({list}) => {
  return (
    <div>
        {list.map((name,type)=>(
            <li key={type}>{name}</li>
        ))}
    </div>
  )
}

export default Test6