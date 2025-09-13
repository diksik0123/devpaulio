import Navigation from './Components/Navigation/Navigation.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Footer from './Components/Footer/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss'
import React, {useEffect, useState} from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    //custom cursor
    function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
    }

    document.addEventListener('mousemove',update)
    document.addEventListener('touchmove',update)

    return () => {
      clearTimeout(timer); 
      document.removeEventListener('mousemove', update);
      document.removeEventListener('touchmove', update);
    }
    });

  if(loading){
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border d-flex justify-content-center align-items-center custom-spinner" role="status">
        </div>
        <i class="bi bi-code-slash static-icon skeleton"></i>
      </div>
    );
  }

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
            <div className="col-12"><Skills /></div>
            <div className="col-12"><Footer /></div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
