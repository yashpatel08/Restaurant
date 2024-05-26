import './App.css';
import './all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Accomodation from './components/Accomodation';
import Meetings from './components/meetings';
import Weddings from './components/weddings';
import Contact from './components/contact';
const App = () => {
  return (
    <>
      <BrowserRouter>

        <div id='root'>
          <Navbar />

          <Routes>
            <Route exact path='*' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            
            <Route path='/accomo' element={<Accomodation />} />
            <Route path='/meetings' element={<Meetings />} />
            <Route path='/weddings' element={<Weddings />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>

          <Footer />
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
