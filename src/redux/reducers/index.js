import { combineReducers  } from 'redux';
import productList from './productList';
import detailProduct from './detailProduct';

export default combineReducers(
    {
        productList,
        detailProduct,
    }
);