import './App.css'

import { Suspense, lazy } from 'react'

import Page404 from './Pages/404'
import SearchPage from './Pages/SearchPage'

import { Router } from './Router'
import { Route  } from './Route'

const HomePage = lazy(() => import('./Pages/Home'))
const AboutPage = lazy(() => import('./Pages/About'))

const routes = [
  {
    path: '/:lang/',
    Component: HomePage
  
  },
  {
    path: '/:lang/about',
    Component: AboutPage
  
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404} >
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>         
      </Suspense>
    </main>
  )
}

export default App
