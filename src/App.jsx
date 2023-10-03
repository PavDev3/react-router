import './App.css'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import { Router } from './Router'
import Page404 from './Pages/404'
import SearchPage from './Pages/SearchPage'
import { Route  } from './Route'

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} >
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>         
    </main>
  )
}

export default App
