import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    async function getRecord() {
      const response = await fetch("http://localhost:5000/record");
      if (!response.ok) {
        window.alert(response.statusText);
        return;
      }

      const records = await response.json();
      setTemp(records);
    }
    getRecord();
    // console.log(temp);
    return;
  }, [temp.length]);

  return (
    <div className="p-5 m-2">
      {temp.map((item) => {
        return (
          <Link to={`/home/${item._id}`} key={item._id} style={{ textDecoration: 'none' }}>
            <div className="card m-3 p-2 bg-dark text-white" >
              {item.Title}<br/>
              {item.Desc}<br/>
              {item.Points}<br/>
              {item.level}<br/>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
