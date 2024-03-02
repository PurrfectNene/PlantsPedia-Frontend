import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../AllPlantsPage.css";
import Searchbar from "../components/Searchbar";
import Easy from "../assets/EASY.png";
import Medium from "../assets/MEDIUM.png";
import Hard from "../assets/HARD.png";
import "bootstrap-icons/font/bootstrap-icons.css"


function AllPlantsPage() {
  const [plants, setPlants] = useState([]);
  const [indoor, setIndoor] = useState("");
  const [alphabetical, setAlphabetical] = useState("");
  const [ease, setEase] = useState("");


  function addFavourites(plant){
    
  let favourites = localStorage.getItem("favourites")
  let favouritesObj = localStorage.getItem("favouritesObj")
    if(!favourites){
      console.log('if')
      
      localStorage.setItem("favourites", `[${plant.id}]`)
      localStorage.setItem("favouritesObj", `[${JSON.stringify(plant)}]`)
     
    }
    else if(favourites && !favourites.includes(plant.id)){
      console.log("else")
     let ArrFav =  JSON.parse(favourites)
     console.log(ArrFav)
     ArrFav.push(plant.id)
      localStorage.setItem("favourites",`[${ArrFav}]`)

      let ArrFavObj =  JSON.parse(favouritesObj)
      
      ArrFavObj.push(plant)

       localStorage.setItem("favouritesObj",`${JSON.stringify(ArrFavObj)}`)
    }
  }

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
      .get(`https://plantspedia-backend.onrender.com/plants/?_sort=name&${params.toString()}`)
      .then((plantsFromAPI) => {
        setPlants(plantsFromAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [indoor, alphabetical, ease]);

  function clearFilters() {
    axios
      .get(`http://localhost:5005/plants`)
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
          {plants.map((onePlant) => (
            <div className="col mb-4" key={onePlant.id}>
              <div className="card square-card h-100">
                <Link to={`/plants/${onePlant.id}`}>
                  <img
                    src={onePlant.image}
                    className="card-img-top img-fluid"
                    alt={onePlant.name}
                    style={{ height: "600px", objectFit: "cover" }}
                  />
                </Link>
                
                <div className="card-body">
                  <h2 className="card-title text-center">{onePlant.name}</h2>
                  <p className="card-title text-center">
                    {onePlant.latin_name}
                  </p>
                  <p className="card-title text-center">
                    {onePlant.outdoor_or_indoor}
                  </p>
                      <div className="text-center">
                        {onePlant.ease_of_care === "Easy" && (
                          <img src={Easy} alt={onePlant.ease_of_care} />
                        )}
                        {onePlant.ease_of_care === "Medium" && (
                          <img src={Medium} alt={onePlant.ease_of_care} />
                        )}
                        {onePlant.ease_of_care === "Difficult" && (
                          <img src={Hard} alt={onePlant.ease_of_care} />
                        )}
                      </div>

                     <div className="d-flex">
                     
                     <button onClick={()=>{addFavourites(onePlant)}}><i className="bi bi-flower1"/></button>
                     {localStorage.getItem('favourites').includes(onePlant.id) && <p>FAV PLANT</p>}
                     <p className="ps-2">Add to favourites</p>
                     </div>
                      
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