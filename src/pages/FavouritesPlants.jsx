import React, { useEffect, useState } from "react";
import Easy from "../assets/EASY.png";
import Medium from "../assets/MEDIUM.png";
import Hard from "../assets/HARD.png";

function FavouritesPlants() {
  const [favourites, setFavourites] = useState([])

  let favouritesObj = JSON.parse(localStorage.getItem("favouritesObj"));

    
  

  console.log(favourites);


  return (
    <div className="row row-cols-1 row-cols-md-3 g-6 mb-4">
      {favouritesObj.map((onePlant) => {
      return(
        <div className="col mb-4" key={onePlant.id}>
        <div className="card square-card h-100">
          <img
            src={onePlant.image}
            className="card-img-top img-fluid"
            alt={onePlant.name}
            style={{ height: "600px", objectFit: "cover" }}
          />
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
                     
                  
                     {localStorage.getItem('favourites') && localStorage.getItem('favourites').includes(onePlant.id)}
                     </div>
                      
                </div>
        </div>
        </div>
      )})}
    </div>
  );
}

export default FavouritesPlants;
