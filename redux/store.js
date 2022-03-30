import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/reducers'





//If we are not in production set up the devTools in browser inspect.
const bindMiddleware = (middleware) => {
   if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
   }

   return applyMiddleware(...middleware)
}

//ako action.type e Hidriran da return the previous state  spreaded, and the action.payload, ako ne e Hidrate da ni vrati simply the state and action from the reducers
const reducer = (state, action) => {
   if (action.type === HYDRATE) {
      const nextState = {
         ...state,
         ...action.payload
      }
      return nextState
   } else {
      return reducers(state, action)
   }
}

const initStore = () => {
   return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)