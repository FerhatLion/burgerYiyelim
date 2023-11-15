import './App.css'
import {Route,Routes} from 'react-router-dom'
import {Home} from './components/Home.jsx'
import {Menu} from './components/Menu.jsx'
import {About} from './components/About.jsx'
import {Contact} from './components/Contact.jsx'
import {Navbar} from './components/Navbar.jsx'
import {Footer} from './components/Footer.jsx'


function App() {
  
  return <div className='App'>

    <Navbar/>
        
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/menu' exact element={<Menu/>} />
            <Route path='/about' exact element={<About/>} />
            <Route path='/contact' exact element={<Contact/>} />

        </Routes>
        

        <Footer/>

      </div>
     
   
}

export default App
