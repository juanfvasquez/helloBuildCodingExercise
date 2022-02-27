import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"

import {reducers} from "./redux"
// import {data} from './data/mock/user'
// import {setUser, setRepos} from './redux/user/actions'

const store = createStore(reducers)

// store.dispatch(setUser(data.user))
// store.dispatch(setRepos(data.user.repositories.edges))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
