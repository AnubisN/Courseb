import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import classes from './reviewModal.module.scss'
import { FaStar } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import { COURSE_CREATE_REVIEW_RESET } from '../../constants/courseConstants'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/loader';
import Alert from '../Alert/Alert'
import { createProductReview } from '../../actions/courseActions';

function ReviewModal({ onClose, course }) {
    const courseReviewCreate = useSelector(state => state.courseReviewCreate)
    const { success, loading, error } = courseReviewCreate
    const dispatch = useDispatch();

    const colors = {
        orange:"#FFBA5A",
        grey:"#a9a9a9"
    }
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [msg, setMsg] = useState("")

    const onCloseSubmit = () => {
        onClose();
        dispatch({type:COURSE_CREATE_REVIEW_RESET});
    }

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(currentValue,msg)
        dispatch(createProductReview(
            course.course._id, {
                rating: currentValue,
                comment: msg
            }
        ))
    }

    return ReactDOM.createPortal(
        <div className={classes.modal}>
            <div className={classes.modal__container}>
                {loading && <Loader />}
                {success && <Alert message="Review Submitted" variant='success' width />}
                {error && <Alert message={error} variant="danger" width />}
                <div className={classes.modal__topsection}>
                    <div className={classes.modal__course__container}>
                        <div className={classes.modal__course__img}>
                            <img src={`${course.course.image}`} />
                        </div>
                        <div className={classes.modal__course__title}>
                            <h3>{course.course.name}</h3>
                        </div>
                    </div>
                    <div className={classes.modal__close__btn}>
                        <AiOutlineClose onClick={() => onCloseSubmit()} />
                    </div>
                </div>

                <div className={classes.modal__review}>
                    <h4>Your review</h4>
                    <div className={classes.modal__review__stars}>
                        {
                            stars.map((_,index) => {
                                return (
                                    <FaStar 
                                        key={index}
                                        size={24}
                                        style={{
                                            marginRight: 5,
                                            cursor: "pointer"
                                        }}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                )
                            })
                        }
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <textarea placeholder='Write your review (optional)' value={msg} onChange={(e)=> setMsg(e.target.value)}>
                        </textarea>
                        <Button className={classes.button} type="primary__small">
                            Submit    
                        </Button>
                    </form>
                </div>
            </div>

        </div>,
        document.getElementById("modal-root")
    );    
}

export default ReviewModal