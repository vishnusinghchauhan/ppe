import React from 'react';
import './App.css';
import store from './store/configureStore';
import { Provider } from "react-redux";
import history from "./history"
import Routes from './routes';

import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'

import {  BrowserRouter as Router} from 'react-router-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <Footer />
            </Router>
        </Provider>
    </div>
  );
}

export default App;
