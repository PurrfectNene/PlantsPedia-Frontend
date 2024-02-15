import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllPlantsPage from './pages/AllPlantsPage'
import HomePage from './pages/HomePage'
import PlantDetailsPage from './pages/PlantDetailsPage'
import AddPlantPage from './pages/AddPlantPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/plants" element={<AllPlantsPage/>}></Route>
      <Route path="/plants/:plantId" element={<PlantDetailsPage/>}></Route>
      <Route path="/plants/create" element={<AddPlantPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
