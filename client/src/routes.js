import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';


import Home from './Components/Home/Home'
import About from './Components/Home/About'
import Contact from './Components/Home/Contact'
import Deelers from './Components/Home/Deelers'
import Testnimonial from './Components/Home/Testnimonial'


import Login from './Components/layout/login'
import Register from './Components/layout/register'

import StockList from './Components/Stock/StockList'
import AddStock from './Components/Stock/AddStock'
import ProductDetail from './Components/Stock/ProductDetail'

import Dashboard from './Components/SuperAdmin/Dashboard'




import {userService} from "./services/authentication.service";
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        userService.loggedIn() === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

const routing = () => (
    

	    <Switch>
            <Route exact path="/" component={Home} label="Home"/>
            <Route exact path="/login" component={Login} label="Login"/>
            <Route exact path="/sign-up" component={Register} label="Register"/>

            <Route exact path="/about" component={About} label="About"/>
            <Route exact path="/contactus" component={Contact} label="Contact"/>
            <Route exact path="/dealers" component={Deelers} label="Deelers"/>
            <Route exact path="/testnimonial" component={Testnimonial} label="Testnimonial"/>

            <PrivateRoute exact path="/add-stock" component={AddStock} label="AddStock"/>
            <PrivateRoute exact path="/list-stock" component={StockList} label="StockList"/>
            <PrivateRoute exact path="/stock-product-detail" component={ProductDetail} label="ProductDetail"/>
            <PrivateRoute exact path="/dashboard" component={Dashboard} label="Dashboard"/>
	    
        </Switch>
  
    
)
export default routing;