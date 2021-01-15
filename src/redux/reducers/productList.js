import { ACTIONS } from '../actions'

const initialState = {
    list: [],
    errorMessage: '',
    isLoading: false
}

const productList = (state = initialState, action) => {
    switch (action.type) {
        case `${ACTIONS.PRODUCTS_SEARCH}_START`:
            return {
                ...state,
                isLoading: true
            }
        case `${ACTIONS.PRODUCTS_SEARCH}_SUCCESS`:
            return {
                ...state,
                isLoading: false
            }
        case `${ACTIONS.PRODUCTS_SEARCH}_ERROR`:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default productList;