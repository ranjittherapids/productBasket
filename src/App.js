
import './App.css';
import FetchApi from './component/fetchApi'
import ProductContainer from './component/ProductContainer';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import ProductDetails from './component/productDetails';

import {useSelector}from 'react-redux'
import Basket from './component/basket';
import Header from './component/header'
function App() {
   const {ID,loading} =  useSelector(state =>state.product )
  return (
    <div className="App">
    {loading?<h1>loading.....</h1>:''}
     <Router>
    <Header/>
       <Switch>
       <Route path='/basket'>
       <Basket/>
       </Route>
       <Route path='/allproduct'>
       <ProductContainer/>
       </Route>
         <Route path={`/product${ID}`}>
         <ProductDetails/>
         </Route>
       
       </Switch>
     </Router>
     <FetchApi/>
     
    </div>
  );
}

export default App;
