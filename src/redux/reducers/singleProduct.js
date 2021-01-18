import { ACTIONS } from '../actions'

const initialState = {
    details: {},
    breadCrumb: [],
    isLoadingProduct: false,
    errorRequest: ''
}

const singleProduct = (state = initialState, action) => {
    switch (action.type) {
        case `${ACTIONS.PRODUCT_GET_DETAILS}_START`:
            return {
                ...state,
                isLoadingProduct: true,
                errorRequest: ''
            }
        case `${ACTIONS.PRODUCT_GET_DETAILS}_SUCCESS`:
            return {
                ...state,
                details: action.payload.data.item,
                breadCrumb: action.payload.data.categories,
                isLoadingProduct: false
            }
        case `${ACTIONS.PRODUCT_GET_DETAILS}_ERROR`:
            return {
                ...state,
                isLoadingProduct: false,
                errorRequest: 'Ups, Ocurrió un error, por favor intenta buscar otra vez o recarga la página'
            }
        default:
            return state;
    }
}

export default singleProduct;