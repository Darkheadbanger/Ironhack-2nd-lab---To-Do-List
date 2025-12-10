import image from './assets/doItSvg.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
    <nav>
      <div></div>
      <img src={image} alt="notebook" className='note'></img>
      <FontAwesomeIcon icon={faBars} />
    </nav>
  
    <section className='side-bar'>
      <h3>About Us</h3>
      <h3>Home</h3>
    </section>

    <footer className='footer'>
      <p>Click the image below to go to our website</p>
      <a href="https://github.com/SevillaAia/Ironhack-2nd-Project-React-Vite" target='_blank'><img src={image} alt='logo' className='note'/></a>
    </footer>
      <section>
{/* Here, HTML with JS dynamically */}
      </section>
    </>
  )
}

export default App

