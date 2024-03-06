import React, { useEffect, useState } from "react";
import Easy from "../assets/EASY.png";
import Medium from "../assets/MEDIUM.png";
import Hard from "../assets/HARD.png";
import { Link } from "react-router-dom";
import FavouritePlantCard from "../components/FavouritePlantCard";


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
    <div className="container-fluid vw-100">
        {favourites && (
        <>
          <h1 className="text-center m-4">Your Favourite Plants</h1>
          <p className="text-center m-4 fs-5">Your soon-to-be botanical buddies?</p>
          <div className="row row-cols-1 row-cols-md-3 g-6 mb-4">
          {favourites.map((onePlant) => {
            return(
              <FavouritePlantCard key={onePlant.id} plantInfo={onePlant} removeFavourite={removeFavourite}/>
            )
          })}
          </div>
          {favourites.length === 0 && (
            <div className="container-fluid">
              <div className="row">
                <div className="text-center text-danger fs-3 mt-5">Your list of favourites is empty!</div>
            </div>
          </div>
          )}  
        </> 
      )}
    </div>  
  );
}

export default FavouritesPlants;
