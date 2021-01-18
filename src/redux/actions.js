import axios from '../helper/axios';

/* CONSTANS TYPE */
export const ACTIONS = {
    PRODUCTS_SEARCH: 'PRODUCTS_SEARCH',
    PRODUCT_GET_DETAILS: 'PRODUCT_GET_DETAILS',
    SHOW_SEARCH_MSG: 'SHOW_SEARCH_MSG',
}

/* ACTIONS CREATORS */
export const showSearchMessage = () => ({
    type: ACTIONS.SHOW_SEARCH_MSG,
});

export const searchProducts = (query) => ({
    type: ACTIONS.PRODUCTS_SEARCH,
    payload: axios.get(`/items?q=${query}`)
});

export const getProducDetail = (productId) => ({
    type: ACTIONS.PRODUCT_GET_DETAILS,
    payload: axios.get(`/items/${productId}`)
});

