import { combineReducers  } from 'redux';
import requestedProducts from './requestedProducts';
import singleProduct from './singleProduct';

export default combineReducers(
    {
        requestedProducts,
        singleProduct,
    }
);