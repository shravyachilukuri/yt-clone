import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import "./_base.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter as Router} from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.render(
  <Router>

  <Provider store={store}>
    
    <App />
    

    </Provider>
    </Router>,

  document.getElementById('root')
);


