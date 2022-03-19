import axios from 'axios'
import {
    CONTACT_MESSAGE_REQUEST,
    CONTACT_MESSAGE_SUCCESS,
    CONTACT_MESSAGE_FAIL,
} from '../constants/contactConstants'

export const contactMessage = (msg) => async (dispatch) => {
    try{
        dispatch({type:CONTACT_MESSAGE_REQUEST})

        const { data } = await axios.post('/api/contactUs/',msg)
        
        dispatch({type: CONTACT_MESSAGE_SUCCESS, payload: data.detail})

    } catch(error) {
        dispatch({
            type: CONTACT_MESSAGE_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}


