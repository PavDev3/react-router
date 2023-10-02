import './App.css'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import { Router } from './Router'
import Page404 from './Pages/404'
import SearchPage from './Pages/SearchPage'

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
    Component: SearchPage
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
