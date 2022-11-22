import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import  userReducer  from './user.slice';
import  categoriesReducer  from './categories.slice';
import  cartReducer  from './cart.slice';

const middlewares = logger;


export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      categories: categoriesReducer,
      cart: cartReducer,
        }, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
    })
  },
);
