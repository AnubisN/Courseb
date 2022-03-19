import {
    CONTACT_MESSAGE_REQUEST,
    CONTACT_MESSAGE_SUCCESS,
    CONTACT_MESSAGE_FAIL,
} from '../constants/contactConstants'

export const contactReducer = (state = {}, action) => {
    switch(action.type) {
        case CONTACT_MESSAGE_REQUEST:
            return{loading: true, ...state}

        case CONTACT_MESSAGE_SUCCESS:
            return {loading: false, success: true, msg: action.payload}
        
        case CONTACT_MESSAGE_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}