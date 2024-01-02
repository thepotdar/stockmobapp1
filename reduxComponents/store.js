import stockDataReducer from './stockDataReducer';
import { createStore, combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({

    favorites: favoritesReducer,
    stockData: stockDataReducer,
});

const store = createStore(rootReducer);

export default store;
