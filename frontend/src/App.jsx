// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
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
import Counterse from './Components/16-09-23/Counterse';
import Mapping from './Components/16-09-23/Mapping';
import Ternary from './Components/16-09-23/Ternary';
import DynamicStyles from './Components/20-09-23/DynamicStyles';
import ChildrenProp from './Components/22-09-23/ChildrenProp';
import SignUp from './Components/22-09-23/SignUp';
import StyledComponents from './Components/16-09-23/StyledComponenets';
import PageNotFound from './Components/29-09-23/PageNotFound';
import { ClassComponent } from './Components/29-09-23/ClassComponent';
import Products from './Components/30-09-23/Products';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<PageNotFound />} />
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
        <Route exact path='/counterse' element={<Counterse />} />
        <Route exact path='/mapping' element={<Mapping names={["Dinesh", "Rahul", "Swaraj"]} greeting={"Hello"} />} />
        <Route exact path='/ternary' element={<Ternary loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path='/styled-components' element={<StyledComponents />} />
        <Route exact path='/dynamic-styles' element={<DynamicStyles />} />
        <Route exact path='/children-prop' element={<ChildrenProp />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/class-component' element={<ClassComponent />} />
        <Route exact path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
