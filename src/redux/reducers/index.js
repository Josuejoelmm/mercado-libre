import { combineReducers  } from 'redux';
import searchProducts from './searchProducts';
import detailProduct from './detailProduct';

export default combineReducers(
    {
        searchProducts,
        detailProduct,
    }
);