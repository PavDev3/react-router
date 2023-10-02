import './App.css'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import { Router } from './Router'
import Page404 from './Pages/404'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: ({ routeParams }) => <h1>Buscador: {routeParams.query} </h1>
  }
]

function App() {
  
  return (
    <main>
     <Router routes={routes} defaultComponent={Page404} />
         
    </main>
  )
}

export default App
