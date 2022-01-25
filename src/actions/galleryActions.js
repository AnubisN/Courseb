import axios from 'axios'
import {
    GALLERY_LIST_REQUEST,
    GALLERY_LIST_SUCCESS,
    GALLERY_LIST_FAIL
} from '../constants/galleryConstants'

export const listGallerys = () => async (dispatch) => {
    try{
        dispatch({type:GALLERY_LIST_REQUEST})

        const { data } = await axios.get('/api/gallerys/')

        dispatch({type: GALLERY_LIST_SUCCESS, payload: data})

    } catch(error) {
        dispatch({
            type: GALLERY_LIST_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
    }
}