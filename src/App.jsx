import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllPlantsPage from './pages/AllPlantsPage'
import HomePage from './pages/HomePage'
import PlantDetailsPage from './pages/PlantDetailsPage'
import AddPlantPage from './pages/AddPlantPage'
import EditPlantPage from './pages/EditPlantPage'
import Navbar from './components/Navbar'
import TopPlantPicks from './components/TopPlantPicks'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<HomePage topPlantPicks={<TopPlantPicks/>}/>}/>
      <Route path="/plants" element={<AllPlantsPage/>}></Route>
      <Route path="/plants/:plantId" element={<PlantDetailsPage/>}></Route>
      <Route path="/plants/create" element={<AddPlantPage/>}></Route>
      <Route path="/plants/:plantId/edit" element={<EditPlantPage/>}></Route>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
