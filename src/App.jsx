import './App.css'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import { Router } from './Router'





function App() {
  
const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]
 

  return (
    <main>
     <Router routes={routes} />
         
    </main>
  )
}

export default App
