import './App.css';
import Home from './Home'; 
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './Footer'; 


function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
      <Route path="" element={< Home />}></Route>
      <Route path="footer" element={< Footer />}></Route>
      </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
