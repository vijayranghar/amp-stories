import React from 'react';
import StoriesList from './Components/StoriesList'
import Preview from './Components/Preview'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'
// import Test from './Test'
import './App.css'

function App() {
  const store = createStore(reducer,applyMiddleware(logger))
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <StoriesList />
        <Preview />
        {/* <Test/> */}
      </div>
    </Provider>
  );
}

export default App;
