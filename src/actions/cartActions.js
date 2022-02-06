import {
    CART_ADD_ITEM,
    COURSE_CHECKOUT_REQUEST,
    COURSE_CHECKOUT_SUCCESS,
    COURSE_CHECKOUT_FAIL,
} from '../constants/cartConstants'

import {
    ENROLLED_COURSE_SUCCESS
} from '../constants/courseConstants'

import axios from 'axios'

export const listCartItems = (id) => async (dispatch) => {
    const { data } = await axios.get(`/api/courses/${id}/`)
    dispatch({type:CART_ADD_ITEM, payload: data})
}

export const requestcartItems = id => async (dispatch, getState) => {
    try{
        dispatch({type:COURSE_CHECKOUT_REQUEST})

        const { 
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/users/updateEnrolledCourses/${id}/`,{},config)

        dispatch({type: COURSE_CHECKOUT_SUCCESS})
        dispatch({type: ENROLLED_COURSE_SUCCESS, payload: data.courses})

    } catch(error) {
        dispatch({
            type: COURSE_CHECKOUT_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.message
        })
    }
}