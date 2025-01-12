import './App.css';
import Home from './_Components/Home';
import Find_a_pet from './_Components/Find_a_pet';
import Details_pet from './_Components/Details_pet';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated imports
import AdoptionInfo from './_Components/AdoptionInfo';
import Pet_care from './_Components/Pet_care';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Define Routes here */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Find_a_pet" element={<Find_a_pet />} /> 
          <Route path="/Details_pet/:pet_id" element={<Details_pet />} />
          <Route path="/AdoptionInfo" element={<AdoptionInfo/>} />
          <Route path="/Pet_care" element={<Pet_care/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
