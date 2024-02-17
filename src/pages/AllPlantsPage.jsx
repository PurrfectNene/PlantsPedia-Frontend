import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../AllPlantsPage.css"

function AllPlantsPage() {
  const [plants, setplants] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/plants`)
      .then((plantsFromAPI) => {
        setplants(plantsFromAPI.data)
        console.log(plantsFromAPI.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div className="vh-100 vw-100">
      <div className="container-fluid">
        <h1 className="text-center">Plants list</h1>
        <div className="row row-cols-1 row-cols-md-3 g-6 mb-4">
          {plants.map((onePlant) => (
            
            <div className="col mb-4" key={onePlant.id}>
              <div className="card square-card h-100">
              <Link to={`/plants/${onePlant.id}`}>
                <img src={onePlant.image} className="card-img-top img-fluid" alt={onePlant.name} style={{ height: "600px", objectFit: "cover" }} />
              </Link>
                <div className="card-body">
                  <h2 className="card-title text-center">{onePlant.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }

export default AllPlantsPage;
