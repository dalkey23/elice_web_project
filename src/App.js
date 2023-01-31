import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Body/bodyPages/Home';
import Projects from './components/Body/bodyPages/Projects';
import About from './components/Body/bodyPages/About';
import Questions from './components/Body/bodyPages/Questions';
import ReactDoc from './components/Body/bodyPages/ReactDoc';
import Header  from './components/Header/Headers';
import BodySlides from './components/Body/bodySlides';
import Footer from './components/Footer/Footers';

function App() {
  return (
    <Router>
    <Header/>
    <BodySlides />
    <button>aaa</button>
    <Routes>
        <Route path="/" element = { <Home /> }>dddd</Route>
        <Route path="/About" element = { <About /> }></Route>
        <Route path="/Projects" element = { <Projects /> }></Route>
        <Route path="/Questions" element = { <Questions /> }></Route>
        <Route path="/ReactDoc" element = { <ReactDoc /> }></Route>
      </Routes>
    <Footer />
    </Router>

  )
}

export default App;