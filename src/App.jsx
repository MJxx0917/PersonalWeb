import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './WebPages/Home';
import AboutMe from './WebPages/AboutMe';
import Contact from './WebPages/Contact';
import Education from './WebPages/Education';
import Experience from './WebPages/Experience';
import Jobs from './WebPages/Jobs';
import Portfolio from './WebPages/Portfolio';
import Skills from './WebPages/Skills';
import './App.css';

function App() {
  return(<Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
  </Router>)
}

export default App
