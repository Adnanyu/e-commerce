import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './user.slice';
import  categoriesReducer  from './categories.slice';
import  cartReducer  from './cart.slice';

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
