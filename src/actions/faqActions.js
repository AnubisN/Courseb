import axios from 'axios'
import {
    FAQ_LIST_REQUEST,
    FAQ_LIST_SUCCESS,
    FAQ_LIST_FAIL
} from '../constants/faqConstants'

export const listFAQs = () => async (dispatch) => {
    try{
        dispatch({type:FAQ_LIST_REQUEST})

        const { data } = await axios.get('/api/faqs/')

        dispatch({type: FAQ_LIST_SUCCESS, payload: data})

    } catch(error) {
        dispatch({
            type: FAQ_LIST_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
    }
}