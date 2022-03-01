import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { courseReviewCreateReducer, courseDetailsReducer, courseListReducer, coursePostsReducer, enrolledCoursesReducer, courseCategoryReducer } from './reducers/courseReducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { faqListReducer } from './reducers/faqReducers';
import { testimonialListReducer } from './reducers/testimonialReducers';
import { blogDetailsReducer, blogListReducer } from './reducers/blogReducers';
import { galleryListReducer } from './reducers/galleryReducers';
import { userPasswordReducer, userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userProfilePictureReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    courseList: courseListReducer,
    courseDetails: courseDetailsReducer,
    faqList: faqListReducer,
    testimonialList: testimonialListReducer,
    blogList: blogListReducer,
    blogDetails: blogDetailsReducer,
    galleryList: galleryListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdatePicture: userProfilePictureReducer,
    userUpdatePassword: userPasswordReducer,
    enrolledCourses: enrolledCoursesReducer,
    cart: cartReducer,
    coursePosts: coursePostsReducer,
    courseReviewCreate: courseReviewCreateReducer, 
    courseCategory: courseCategoryReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middlware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middlware)))


export default store