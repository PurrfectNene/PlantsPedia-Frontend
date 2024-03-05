import React, { useEffect, useState } from "react";
import Easy from "../assets/EASY.png";
import Medium from "../assets/MEDIUM.png";
import Hard from "../assets/HARD.png";
import { Link } from "react-router-dom";

function FavouritesPlants() {

  const [favourites, setFavourites] = useState([]);

  useEffect(()=>{
    setFavourites(JSON.parse(localStorage.getItem("favouritesObj")))
    console.log(favourites)
  },[])
  
  function removeFavourite(plantId){
    let favArray = JSON.parse(localStorage.getItem('favourites'))
    const newArr = favourites.filter(plant => plant.id !== plantId)
    const newFavArr = favArray.filter(plant => plant !== plantId)    
    setFavourites(newArr)
    localStorage.setItem("favouritesObj", JSON.stringify(newArr))
    localStorage.setItem("favourites", JSON.stringify(newFavArr))

  }

  return (
    <div className="vw-100">
      
      <div className="container-fluid row d-flex row-cols-1 row-cols-md-3 g-6 mb-4 mt-4">
        {favourites && (
        <>
          <h1 className="text-center m-4">Your Favourite Plants</h1>
          {favourites.map((onePlant) => (
            <div className="col mb-4" key={onePlant.id}>
              <div className="card square-card text-center">
                <Link to={`/plants/${onePlant.id}`}>
                  <img
                    src={onePlant.image}
                    className="card-img-top img-fluid"
                    alt={onePlant.name}
                    style={{ height: "600px", width: 'auto'}}
                  />
                </Link>
                <div style={{position: 'absolute', top: '5px', left: '1px'}}>
                  {onePlant.ease_of_care === "Easy" && (
                  <img src={Easy} alt={onePlant.ease_of_care} style={{height: '100px'}} />
                  )}
                  {onePlant.ease_of_care === "Medium" && (
                      <img src={Medium} alt={onePlant.ease_of_care} style={{height: '100px'}}/>
                  )}
                  {onePlant.ease_of_care === "Difficult" && (
                  <img src={Hard} alt={onePlant.ease_of_care} style={{height: '100px'}} />
                  )}
                </div>

                <div className="card-body">
                  <h2 className="card-title text-center">{onePlant.name}</h2>
                  <p className="card-title text-center">{onePlant.latin_name}</p>
                  <p className="card-title text-center">{onePlant.outdoor_or_indoor}</p>
                  <button onClick={()=> removeFavourite(onePlant.id)} className="btn btn-outline-dark mt-4">Remove from Favourites</button>
                </div>
              </div>
            </div>
          ))}
          {/* {favourites.length === 0 && (
            <div className="container-fluid">
              <div className="row">
                <div className="text-center">
                  No favourites are found
                </div>
            </div>
          </div>
          )}             */}
        </> 
      )}
      </div>
    </div>
  )
}

export default FavouritesPlants;
