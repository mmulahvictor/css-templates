import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import "./App.css"
function App() {
  return (
    <div className="App">
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
    </div>
  );
}

export default App;
