import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllPlantsPage from './pages/AllPlantsPage'
import HomePage from './pages/HomePage'
import PlantDetailsPage from './pages/PlantDetailsPage'
import AddPlantPage from './pages/AddPlantPage'
import Navbar from './components/Navbar'
import TopPlantPicks from './components/TopPlantPicks'

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<HomePage topPlantPicks={<TopPlantPicks/>}/>}/>
      <Route path="/plants" element={<AllPlantsPage/>}></Route>
      <Route path="/plants/:plantId" element={<PlantDetailsPage/>}></Route>
      <Route path="/plants/create" element={<AddPlantPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
