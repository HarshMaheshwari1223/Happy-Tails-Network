import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'


import Home from './componets/Home';
import CreactPet from './componets/CreactPet';
import Viewpets from './componets/Viewpets';
import UserSignUp from './componets/Auth/UserSignUp';
import UserSignIn from './componets/Auth/UserSignIn';
// import Pet_care from './components/Pet_care';
import Pet_care from './componets/Pet_care';
import AdoptionInfo from './componets/AdoptionInfo';
function App() {
  return (
    <BrowserRouter>
       <div className="App">
       <Routes>
       <Route path="/signin" element={<UserSignIn />} />
       <Route path="/signup" element={<UserSignUp />} />
       <Route path ="/" element={<Home/>}/>
        <Route path="/createpet" element={<CreactPet />} />
        <Route path="/view" element={< Viewpets/>} />
        <Route path="/Pet_care" element={<Pet_care/>} />
        <Route path="/AdoptionInfo" element={<AdoptionInfo/>} />
       </Routes>
      
      </div>
    </BrowserRouter>
   
  );
}

export default App;
