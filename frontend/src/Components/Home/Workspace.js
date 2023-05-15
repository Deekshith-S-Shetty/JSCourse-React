import React from 'react'
import { useParams } from 'react-router-dom'

const Workspace = () => {

  const {name} = useParams();

  return (
    <div>
      <h1>Wrok Space {name}</h1>
    </div>
  )
}

export default Workspace
