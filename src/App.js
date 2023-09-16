import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routecompo from './compo/Routecompo'
import Linkroute from './compo/Linkroute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Linkroute/>
        <Routecompo/>
      </BrowserRouter>
    </>
  )
}

export default App

