import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const temp = [
    { Name: "blabla", age: 20 },
    { Name: "clacla", age: 21 },
    { Name: "dladla", age: 22 },
    { Name: "elaela", age: 23 },
    { Name: "flafla", age: 24 },
  ];

  return (
    <div className="p-5 m-2">
      {temp.map((item) => {
        return (
          <Link to={`/home/${item.Name}`}>
            <div className="card m-3 p-2 bg-dark text-white" >
              <div className="card-body" key={item.age}>{item.Name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
