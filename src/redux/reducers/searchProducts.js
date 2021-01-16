import { ACTIONS } from '../actions'

const initialState = {
    list: [],
    breadCrumb: [],
    errorMessage: '',
    isLoading: false
}

const searchProducts = (state = initialState, action) => {
    switch (action.type) {
        case `${ACTIONS.PRODUCTS_SEARCH}_START`:
            return {
                ...state,
                isLoading: true
            }
        case `${ACTIONS.PRODUCTS_SEARCH}_SUCCESS`:
            return {
                ...state,
                list: action.payload.data.items,
                breadCrumb: action.payload.data.categories,
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

export default searchProducts;