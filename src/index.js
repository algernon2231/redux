import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import allReducer  from './reducers/index'
import {Provider } from 'react-redux'
import Counter from './Counter'
import "./styles.css";


const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

function App() {
  return (
    <div className="App">
     <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store= {myStore}>
  <App />
</Provider>
,rootElement);
