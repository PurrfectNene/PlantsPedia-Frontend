import { useEffect, useState } from "react";
import axios from "axios";
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

    axios.get(`${import.meta.env.VITE_API_URL}/api/plants/?_sort=name&${params.toString()}`
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
      .get(`${import.meta.env.VITE_API_URL}/api/plants`)
      .then((response) => {
        setPlants(response.data);
        setIndoor('')
        setAlphabetical('')
        setEase('')
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
            <div className="col-md-3 col-sm-6 col-12">
              <div className="dropdown mb-1">
                <button
                  className="btn btn-outline-dark dropdown-toggle filter-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={window.innerWidth <= 1073 ? { fontSize: '10px' } : null}>
                  Sort: {<strong>{alphabetical}</strong>}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setAlphabetical("A-Z")}
                    >
                      A-Z
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setAlphabetical("Z-A")}
                    >
                      Z-A
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="dropdown mb-1">
                <button
                  className="btn btn-outline-dark dropdown-toggle filter-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={window.innerWidth <= 1073 ? { fontSize: '10px' } : null}
                >
                  Indoor/Outdoor: {<strong>{indoor}</strong>}
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
                    <a className="dropdown-item" onClick={() => setIndoor("Outdoor/Indoor")}>
                      Both
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="dropdown mb-1">
                <button
                  className="btn btn-outline-dark dropdown-toggle filter-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={window.innerWidth <= 1073 ? { fontSize: '10px' } : null}
                >
                  Ease of Care: {<strong>{ease}</strong>}
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
              <button className="btn btn-outline-dark filter-btn mb-1" style={window.innerWidth <= 1073 ? { fontSize: '10px' } : null} onClick={clearFilters}>
                Clear All
              </button>
            </div>
          </div>
        </div>
        <div>
          
          <div className="row row-cols-1 row-cols-md-3 g-6 mb-4">
          {plants.map((onePlant) => {
            return <PlantCard key={onePlant.id} plantInfo={onePlant} />;
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPlantsPage;
