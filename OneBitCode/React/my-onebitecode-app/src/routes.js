import  React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PlanetsScreen from './screens/PlanetsScreen'

const NewRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' component={PlanetsScreen}/>
    </Routes>

  </BrowserRouter>
)
export default NewRoutes