import axios from 'axios'
import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,

    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,

    ENROLLED_COURSE_REQUEST,
    ENROLLED_COURSE_SUCCESS,
    ENROLLED_COURSE_FAIL,

    COURSE_POSTS_REQUEST,
    COURSE_POSTS_SUCCESS,
    COURSE_POSTS_FAIL,

    COURSE_CREATE_REVIEW_REQUEST,
    COURSE_CREATE_REVIEW_SUCCESS,
    COURSE_CREATE_REVIEW_FAIL,

    COURSE_CATEGORY_REQUEST,
    COURSE_CATEGORY_SUCCESS,
    COURSE_CATEGORY_FAIL,
} from '../constants/courseConstants'

export const listCourse = () => async (dispatch) => {
    try{
        dispatch({type:COURSE_LIST_REQUEST})

        const { data } = await axios.get('/api/courses/')

        dispatch({type: COURSE_LIST_SUCCESS, payload: data})

    } catch(error) {
        dispatch({
            type: COURSE_LIST_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}

export const listCourseCategory = () => async (dispatch) => {
    try{
        dispatch({type:COURSE_CATEGORY_REQUEST})

        const { data } = await axios.get('/api/category/')

        dispatch({type: COURSE_CATEGORY_SUCCESS, payload: data})

    } catch(error) {
        dispatch({
            type: COURSE_CATEGORY_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}

export const listCourseDetails = id => async (dispatch) => {
    try{
        dispatch({type:COURSE_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/courses/${id}/`)

        dispatch({type: COURSE_DETAILS_SUCCESS, payload: data})

    } catch(error) {
        dispatch({
            type: COURSE_DETAILS_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
    }
}

export const listEnrolledCourses = id => async (dispatch, getState) => {
    try{
        dispatch({type:ENROLLED_COURSE_REQUEST})

        const { 
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/users/getEnrolledCourses/`,config)

        dispatch({type: ENROLLED_COURSE_SUCCESS, payload: data.courses})

    } catch(error) {
        dispatch({
            type: ENROLLED_COURSE_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}


export const coursePostsAction = id => async (dispatch, getState) => {
    try{
        dispatch({type:COURSE_POSTS_REQUEST})

        const { 
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/coursePost/${id}/`,config)

        dispatch({type: COURSE_POSTS_SUCCESS, payload: data.posts})

    } catch(error) {
        dispatch({
            type: COURSE_POSTS_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}

export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try{
        dispatch({type:COURSE_CREATE_REVIEW_REQUEST})

        const { 
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/courseReview/${productId}/`,
                    review,
                    config
                )

        dispatch({type: COURSE_CREATE_REVIEW_SUCCESS, payload: data.posts})

    } catch(error) {
        dispatch({
            type: COURSE_CREATE_REVIEW_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}

