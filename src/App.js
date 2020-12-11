import React from 'react'
import { Root, Routes } from 'react-static'
import { Router, Redirect } from '@reach/router'
import Loading from './Components/Loading'

import './app.scss'

function App() {
  return (
    <Root>
      <React.Suspense fallback={Loading()}>
        <Router>
          <Redirect from="uphs" to="research" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
