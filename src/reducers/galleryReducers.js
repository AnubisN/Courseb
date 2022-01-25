import {
    GALLERY_LIST_REQUEST,
    GALLERY_LIST_SUCCESS,
    GALLERY_LIST_FAIL
} from '../constants/galleryConstants'

export const galleryListReducer = (state = { gallery:[] }, action) => {
    switch(action.type) {
        case GALLERY_LIST_REQUEST:
            return {loading:true, gallery: []}

        case GALLERY_LIST_SUCCESS:
            return {loading: false, gallery: action.payload}
        
        case GALLERY_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}