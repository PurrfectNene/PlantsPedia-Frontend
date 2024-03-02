import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SimilarPlants(props) {

    const [plants, setPlants] = useState()
    const [similarPlants, setSimilarPlants] = useState()
    const [randomPlant1, setRandomPlant1] = useState()
    const [randomPlant2, setRandomPlant2] = useState()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/plants`)
        .then((response) => {
            const allPlants = response.data
            setPlants(allPlants)

            const filteredSimilar = allPlants.filter((onePlant)=> {
                return props.plant.ease_of_care === onePlant.ease_of_care
            })
            setSimilarPlants(filteredSimilar)

            if (filteredSimilar){ 
                let randomNum = Math.floor(Math.random()*filteredSimilar.length)

                let randomNum2;
                do {
                    randomNum2 = Math.floor(Math.random()*filteredSimilar.length)
                } while (randomNum2 === randomNum && randomNum2 === props.plant.id)
                
                setRandomPlant1(filteredSimilar[randomNum])
                setRandomPlant2(filteredSimilar[randomNum2])
                console.log(randomPlant1)
            }
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        })
        .catch((err)=>{
            console.log(err)
        })
    },[props.plant.id])

  return (
    <div className='container-fluid' style={{backgroundColor: '#e8ebe8'}}>
        <div className="row">
            <h2 className='text-center m-3' style={{letterSpacing: '-5.5px', fontSize: '3rem'}}>Similar Plants</h2>
            <p className='text-center'>Like the {props.plant.name}, these plants also suit your preferences...</p>

                <div className="row text-center justify-content-center p-3">
                    {similarPlants &&
                    <div className='d-flex justify-content-center'>
                        <div className='px-5'>
                            <Link to={`/plants/${randomPlant1.id}`}> <img src={randomPlant1.image} alt="" className="m-3 rounded-5" style={{height: '200px', width: '200px'}} /> </Link>
                            <h3 className='text-center'>{randomPlant1.name}</h3>
                        </div>
                        <div className='px-5'>
                            <Link to={`/plants/${randomPlant2.id}`}> <img src={randomPlant2.image} alt="" className="m-3 rounded-5" style={{height: '200px', width: '200px'}} /> </Link>
                            <h3 className='text-center'>{randomPlant2.name}</h3>
                        </div>
                    </div>
                    }
                </div>
        </div>
    </div>

  )
}

export default SimilarPlants