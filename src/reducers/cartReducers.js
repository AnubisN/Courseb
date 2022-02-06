import {
    CART_ADD_ITEM,
    COURSE_CHECKOUT_REQUEST,
    COURSE_CHECKOUT_SUCCESS,
    COURSE_CHECKOUT_FAIL,
    COURSE_CHECKOUT_REMOVE,
} from '../constants/cartConstants'

export const cartReducer = (state = { courses: {}}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            return {...state,
                courses: action.payload}

        case COURSE_CHECKOUT_REQUEST:
            return{loading: true, ...state}

        case COURSE_CHECKOUT_SUCCESS:
            return {loading: false, success: true, ...state}
        
        case COURSE_CHECKOUT_FAIL:
            return {loading: false, error: action.payload}

        case COURSE_CHECKOUT_REMOVE:
            return {...state,success:false}

        default:
            return state
    }
}