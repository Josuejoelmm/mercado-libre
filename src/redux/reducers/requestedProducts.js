import { ACTIONS } from '../actions'

const initialState = {
    list: [],
    breadCrumb: [],
    errorMessage: '',
    isLoading: false,
    showSearchMsg: false
}

const requestedProducts = (state = initialState, action) => {
    switch (action.type) {
        case `${ACTIONS.PRODUCTS_SEARCH}_START`:
            return {
                ...state,
                isLoading: true,
                showSearchMsg: false
            }
        case `${ACTIONS.PRODUCTS_SEARCH}_SUCCESS`:
            if (action.payload.data.items.length > 0) {
                return {
                    ...state,
                    list: action.payload.data.items,
                    breadCrumb: action.payload.data.categories,
                    isLoading: false
                }
            }
            return {
                ...state,
                list: action.payload.data.items,
                breadCrumb: action.payload.data.categories,
                isLoading: false,
                showSearchMsg: true
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

export default requestedProducts;