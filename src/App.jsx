import Navigation from './Components/Navigation/Navigation.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss'

function App() {

  function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
  }

  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 sticky-nav mb-5">
          <Navigation />
        </div>
        <div className="col-12 col-md-7 mb-5">
          <div className="row">
            <div className="col-12"><About /></div>
            <div className="col-12"><Experience/></div>
            <div className="col-12"><Projects /></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
