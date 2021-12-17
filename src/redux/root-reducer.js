// import { combineReducers } from "redux";

// import userReducer from "./user/user.reducer";
// import cartReducer from "./cart/cart.reducer";
// import directoryReducer from './directory/directory.reducer';
// import shopReducer from "./shop/shop.reducer";

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer,
//     directory: directoryReducer,
//     shop: shopReducer
// });


import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

export default persistReducer(persistConfig, rootReducer);