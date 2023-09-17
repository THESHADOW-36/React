// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Login from "./Components/Login"
import Register from "./Components/Register"
import Counter from './Components/Counter';
import Effect1 from './Components/13-09-23/UseEffect1';
import Effect2 from './Components/13-09-23/UseEffect2'
import Effect3 from './Components/15-09-23/UseEffect3';
import Effect4 from './Components/15-09-23/UseEffect4';
import SinglePage from './Components/15-09-23/SingleProduct';
import Params from './Components/15-09-23/Params';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/effect1' element={<Effect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleproduct/:id/:name' element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
