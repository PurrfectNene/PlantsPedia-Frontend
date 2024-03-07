import { Link } from "react-router-dom";
import Easy from "../assets/EASY.png";
import Medium from "../assets/MEDIUM.png";
import Hard from "../assets/HARD.png";
import { useState } from "react";

function PlantCard(props) {

  const [isInfoIcon, setIsInfoIcon] = useState(true);

  function addFavourites(plant) {
    let favourites = localStorage.getItem("favourites");
    let favouritesObj = localStorage.getItem("favouritesObj");

    if (!favourites) {
      localStorage.setItem("favourites", `[${plant.id}]`);
      localStorage.setItem("favouritesObj", `[${JSON.stringify(plant)}]`);
    } else if (favourites && !favourites.includes(plant.id)) {
      let ArrFav = JSON.parse(favourites);
      ArrFav.push(plant.id);
      localStorage.setItem("favourites", `[${ArrFav}]`);
      console.log(ArrFav);

      let ArrFavObj = JSON.parse(favouritesObj);
      ArrFavObj.push(plant);
      localStorage.setItem("favouritesObj", `${JSON.stringify(ArrFavObj)}`);
    }

    setIsInfoIcon(!isInfoIcon);
  }

  return (
    <div className="col mb-4" key={props.plantInfo.id}>
      <div className="card square-card h-100">
        <Link to={`/plants/${props.plantInfo.id}`} className="zoom-img">
          <img
            src={props.plantInfo.image}
            className="card-img-top img-fluid"
            alt={props.plantInfo.name}
            style={{ height: "600px", objectFit: "cover" }}
          />
        </Link>
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: "1px",
            padding: "10px",
          }}
        >
          {props.plantInfo.ease_of_care === "Easy" && (
            <img
              src={Easy}
              alt={props.plantInfo.ease_of_care}
              style={{
                width: "23%",
                backgroundColor: "SeaGreen",
                borderRadius: "20%",
              }}
            />
          )}
          {props.plantInfo.ease_of_care === "Medium" && (
            <img
              src={Medium}
              alt={props.plantInfo.ease_of_care}
              style={{
                width: "23%",
                backgroundColor: "orange",
                borderRadius: "20%",
              }}
            />
          )}
          {props.plantInfo.ease_of_care === "Difficult" && (
            <img
              src={Hard}
              alt={props.plantInfo.ease_of_care}
              style={{
                width: "23%",
                backgroundColor: "Coral",
                borderRadius: "20%",
              }}
            />
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title text-center">{props.plantInfo.name}</h2>
          <p className="card-title text-center">{props.plantInfo.latin_name}</p>
          <p className="card-title text-center">
            {props.plantInfo.outdoor_or_indoor}
          </p>
          <div className="row d-flex align-items-center">
            <div className="col">
              <div className="d-flex align-items-center justify-content-end">
                <div className="row">
                  <div className="col-6 text-center">
                    <button
                      onClick={() => {
                        addFavourites(props.plantInfo);
                      }}
                      style={{
                        fontSize: "40px",
                        width: "50px",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      <i className={isInfoIcon ? "bi bi-bookmark-heart" : "bi bi-bookmark-heart-fill"}/>
                    </button>
                    {localStorage.getItem("favourites") &&
                      localStorage
                        .getItem("favourites")
                        .includes(props.plantInfo.id)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        {localStorage.getItem("favourites") &&
          localStorage.getItem("favourites").includes(props.plantInfo.id)}
      </div>
    </div>
  );
}

export default PlantCard;
