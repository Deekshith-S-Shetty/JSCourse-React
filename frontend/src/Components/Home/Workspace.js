import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Workspace = () => {

  const {id} = useParams();

  useEffect(() => {
    async function getRecord() {
      const response = await fetch("http://localhost:5000/record");
      if (!response.ok) {
        window.alert(response.statusText);
        return;
      }

      const records = await response.json();
    }
    getRecord();
    return;
  }, []);

  return (
    <div>
      <h1>Wrok Space {id}</h1>
    </div>
  )
}

export default Workspace
