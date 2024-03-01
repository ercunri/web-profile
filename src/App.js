
import Navbar from './components/navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Products from './Pages/Products';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
       </Routes>
      

    </>
  );
}

export default App;
