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
    ENROLLED_COURSE_SORT_BY_RATING,
    ENROLLED_COURSE_SORT_BY_ENROLLED_DATE,

    COURSE_POSTS_REQUEST,
    COURSE_POSTS_SUCCESS,
    COURSE_POSTS_FAIL,

    COURSE_CREATE_REVIEW_REQUEST,
    COURSE_CREATE_REVIEW_SUCCESS,
    COURSE_CREATE_REVIEW_FAIL,
    COURSE_CREATE_REVIEW_RESET,

    COURSE_CATEGORY_REQUEST,
    COURSE_CATEGORY_SUCCESS,
    COURSE_CATEGORY_FAIL,
    COURSE_LIST_SORT,
} from '../constants/courseConstants'

export const courseListReducer = (state = { courses:[], sortedCourses:[] }, action) => {
    switch(action.type) {
        case COURSE_LIST_REQUEST:
            return {loading:true, courses: [], sortedCourses: []}

        case COURSE_LIST_SUCCESS:
            return {loading: false, courses: action.payload, sortedCourses: action.payload }
        
        case COURSE_LIST_FAIL:
            return {loading: false, error: action.payload}

        case COURSE_LIST_SORT:
            return {
                ...state,
                sortedCourses: state.courses.filter(el => el.category.name === action.payload)
            }

        default:
            return state
    }
}

export const courseDetailsReducer = (state = { course: {reviews:[],instructor:{}} }, action) => {
    switch(action.type) {
        case COURSE_DETAILS_REQUEST:
            return {loading:true, ...state}

        case COURSE_DETAILS_SUCCESS:
            return {loading: false, course: action.payload}
        
        case COURSE_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const enrolledCoursesReducer = (state = { courses: []}, action) => {
    switch(action.type) {
        case ENROLLED_COURSE_REQUEST:
            return {loading:true, ...state}

        case ENROLLED_COURSE_SUCCESS:
            return {loading: false, courses: action.payload}
        
        case ENROLLED_COURSE_FAIL:
            return {loading: false, error: action.payload}
        case ENROLLED_COURSE_SORT_BY_RATING:
            return {
                ...state,
                courses: Object.values(state.courses).sort((a, b) => b.course.rating - a.course.rating)
            }
        case ENROLLED_COURSE_SORT_BY_ENROLLED_DATE:
            return {
                ...state,
                courses: state.courses.sort((c1,c2) => new Date(c2.createdAt) - new Date(c1.createdAt))
            }
        default:
            return state
    }
}

export const coursePostsReducer = (state = { posts: []}, action) => {
    switch(action.type) {
        case COURSE_POSTS_REQUEST:
            return {loading:true, ...state}

        case COURSE_POSTS_SUCCESS:
            return {loading: false, posts: action.payload}
        
        case COURSE_POSTS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const courseReviewCreateReducer = (state = { }, action) => {
    switch(action.type) {
        case COURSE_CREATE_REVIEW_REQUEST:
            return {loading:true}

        case COURSE_CREATE_REVIEW_SUCCESS:
            return {loading: false, success: true}
        
        case COURSE_CREATE_REVIEW_FAIL:
            return {loading: false, error: action.payload}
        
        case COURSE_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}

export const courseCategoryReducer = (state = {category: []}, action) => {
    switch(action.type) {
        case COURSE_CATEGORY_REQUEST:
            return {loading:true}

        case COURSE_CATEGORY_SUCCESS:
            return {loading: false, category:action.payload}
        
        case COURSE_CATEGORY_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}