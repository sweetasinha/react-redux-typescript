import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer, { RootState } from './rootReducer'


// convert object to string and store in localStorage
function saveToLocalStorage(state:{}) {
    try {      
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  // load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
       
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

const store = configureStore({
  reducer: rootReducer ,preloadedState:loadFromLocalStorage()
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
 store.subscribe(() => saveToLocalStorage({todos:store.getState().todos}));

export default store