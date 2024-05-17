import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { lazy, Suspense, useEffect } from 'react';
const About = lazy(() => import('./pages/About'));
const Investors = lazy(() => import('./pages/Investors'));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
function App() {
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  const isIE = document.documentMode;
  if (isIE){
    alert(
      "Your MESSAGE here."
    )
  }
  useEffect(() => {
    console.log(document.querySelector('.s-header__nav'))
    const ssMobileMenu = function () {
      const toggleButton = document.querySelector('.s-header__menu-toggle');
      const mainNavWrap = document.querySelector('.s-header__nav');
      const siteBody = document.querySelector('body');
      console.log('hello hi')
      console.log(mainNavWrap)
  
      if (!(toggleButton && mainNavWrap)) return;
  
      toggleButton.addEventListener('click', function (e) {
          e.preventDefault();
          toggleButton.classList.toggle('is-clicked');
          siteBody.classList.toggle('menu-is-open');
      });
  
      mainNavWrap.querySelectorAll('.s-header__nav a').forEach(function (link) {
  
          link.addEventListener("click", function (event) {
  
              // at 900px and below
              if (window.matchMedia('(max-width: 900px)').matches) {
                
                  toggleButton.classList.toggle('is-clicked');
                  siteBody.classList.toggle('menu-is-open');
              }
          });
      });
  
      window.addEventListener('resize', function () {
  
          // above 900px
          if (window.matchMedia('(min-width: 901px)').matches) {
              if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
              if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
          }
      });
     
  
  } // end ssMobileMenu
       ssMobileMenu()

       navigator.browserDetection= (function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();
    
    console.log(navigator.browserDetection); 
    return () => {
     
      if(navigator.browserDetection.includes("Safari")){
       // alert(navigator.browserDetection)
        ssMobileMenu();
      }
    
    

    }
  });
  
  return (
    <div id='page' className='s-pagewrap ss-home'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Suspense fallback={
          <Preloader />
        }>
          <About />
        </Suspense>} />
        <Route path='/investors' element={<Suspense fallback={
          <Preloader />
        }>
          <Investors />
        </Suspense>} />

        <Route path='/contact' element={<Suspense fallback={
          <Preloader />
        }>
          <Contact />
        </Suspense>} />

        <Route path='/careers' element={<Suspense fallback={
          <Preloader />
        }>
          <Careers />
        </Suspense>} />

      </Routes>
      <Footer />


    </div>
  );
}

export default App;
