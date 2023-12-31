// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Homepage from './Components/Homepage';
import Login from "./Components/13-09-23/Login"
import Register from "./Components/13-09-23/Register"
import Counter from './Components/13-09-23/Counter';
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
import SingleProductPage from './Components/01-10-23/SingleProductPage';
import AddProduct from './Components/04-10-23/AddProduct';
import UseMemo from './Components/06-10-23/Usememo';
import CallBack from './Components/07-10-23/CallBack';
import UseReducerExample from './Components/08-10-23/UseReducerExample';
import UseReducer from './Components/08-10-23/UseReducer';
import CustomHookC from './Components/13-10-23/CustomHookC';
import CustomHookLS from './Components/13-10-23/CustomHookLS';
import YourProducts from './Components/YourProducts/YourProducts';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Cart from './Components/Cart/Cart';

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
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/single-product-page/:id' element={<SingleProductPage />} />
        <Route exact path='/add-product' element={<AddProduct />} />
        <Route exact path='/memo' element={<UseMemo />} />
        <Route exact path='/callback' element={<CallBack />} />
        <Route exact path='/use-reducer-example' element={<UseReducerExample />} />
        <Route exact path='/use-reducer' element={<UseReducer />} />
        <Route exact path='/custom-hook-c' element={<CustomHookC />} />
        <Route exact path='/custom-hook-ls' element={<CustomHookLS />} />
        <Route exact path='/your-products' element={<YourProducts />} />
        <Route exact path='/update-product/:id' element={<UpdateProduct />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
