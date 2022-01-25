import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { courseDetailsReducer, courseListReducer } from './reducers/courseReducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { faqListReducer } from './reducers/faqReducers';
import { testimonialListReducer } from './reducers/testimonialReducers';
import { blogDetailsReducer, blogListReducer } from './reducers/blogReducers';
import { galleryListReducer } from './reducers/galleryReducers';

const reducer = combineReducers({
    courseList: courseListReducer,
    courseDetails: courseDetailsReducer,
    faqList: faqListReducer,
    testimonialList: testimonialListReducer,
    blogList: blogListReducer,
    blogDetails: blogDetailsReducer,
    galleryList: galleryListReducer,
})

const initialState = {}

const middlware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middlware)))


export default store