// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Login from "./Components/Login"
import Register from "./Components/Register"
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/counter' element={<Counter />}/>
      </Routes>
    </div>
  );
}

export default App;
