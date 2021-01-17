import { ACTIONS } from '../actions'

const initialState = {
    details: {},
    isLoadingProduct: false
}

const singleProduct = (state = initialState, action) => {
    switch (action.type) {
        case `${ACTIONS.PRODUCT_GET_DETAILS}_START`:
            return {
                ...state,
                isLoadingProduct: true
            }
        case `${ACTIONS.PRODUCT_GET_DETAILS}_SUCCESS`:
            return {
                ...state,
                details: action.payload.data.item,
                isLoadingProduct: false
            }
        case `${ACTIONS.PRODUCT_GET_DETAILS}_ERROR`:
            return {
                ...state,
                isLoadingProduct: false
            }
        default:
            return state;
    }
}

export default singleProduct;