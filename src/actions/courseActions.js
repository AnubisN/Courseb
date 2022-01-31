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