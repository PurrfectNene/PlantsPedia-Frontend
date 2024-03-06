import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../AllPlantsPage.css";
import Searchbar from "../components/Searchbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import PlantCard from "../components/PlantCard";

function AllPlantsPage() {
  const [plants, setPlants] = useState([]);
  const [indoor, setIndoor] = useState("");
  const [alphabetical, setAlphabetical] = useState("");
  const [ease, setEase] = useState("");
  

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("_order", alphabetical);
    if (indoor) {
      params.append("outdoor_or_indoor", indoor);
    }
    if (ease) {
      params.append("ease_of_care", ease);
    }

    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/plants/?_sort=name&${params.toString()}`
      )
      .then((plantsFromAPI) => {
        setPlants(plantsFromAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [indoor, alphabetical, ease]);

  function clearFilters() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/plants`)
      .then((response) => {
        setPlants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="vw-100">
      <Searchbar plants={plants} setPlants={setPlants} />

      <div className="container-fluid">
        <h1 className="text-center m-4">All House Plants</h1>
        <div className="container-fluid mb-4 ">
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 col-12 mb-3">
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setAlphabetical("asc")}
                    >
                      A-Z
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setAlphabetical("desc")}
                    >
                      Z-A
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Indoor or Outdoor
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setIndoor("Indoor")}
                    >
                      Indoor Only
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setIndoor("Outdoor")}
                    >
                      Outdoor Only
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => setIndoor("")}>
                      Indoor and Outdoor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ease of Care
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setEase("Easy")}
                    >
                      Easy
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setEase("Medium")}
                    >
                      Medium Difficulty
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setEase("Difficult")}
                    >
                      Difficult
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <button className="btn btn-outline-dark" onClick={clearFilters}>
                Clear All
              </button>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-6 mb-4">
          {plants.map((onePlant) => {
            return <PlantCard key={onePlant.id} plantInfo={onePlant} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllPlantsPage;
