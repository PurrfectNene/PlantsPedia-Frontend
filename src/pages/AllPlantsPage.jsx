import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllPlantsPage() {
  const [plants, setplants] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/Plants`)
      .then((plantsFromAPI) => {
        setplants(plantsFromAPI.data)
        console.log(plantsFromAPI.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div>
      {plants.map((onePlant) => {
        
        return (
        <div className="card container" style={{ width: '50%', height:'auto' }} key={onePlant.id}>
          <img style={{ width: '100%' }} src={onePlant.image} />
          <h3>{onePlant.name}</h3>
        </div>
        )
      })}
    </div>
  );
}

export default AllPlantsPage;
