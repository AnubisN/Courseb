import React, {useRef} from 'react'
import TestimonialCard from '../../components/TestimonialCard'
import classes from "./Homepage.module.scss"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class TestimonialSlider extends React.Component{

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3.6,
            slidesToScroll: 3.6
        }

        

        return (
            <section className={classes.testimonials}>
                <h2 className={classes.section__title}><span>Testimonials</span></h2>
                <div className={classes.testimonials__container}>
                    <Slider 
                        {...settings}
                        ref={c => (this.slider = c)}
                    >
                        {this.props.testimonials.map(testimo => (
                            <TestimonialCard testimo={testimo} />
                        ))}
                    </Slider>

                    <div className={classes.testimonials__container__slider__arrows}>
                        <div className={classes.testimonials__container__slider__arrows__leftarrow}>
                            <AiOutlineArrowLeft onClick={this.previous}  />
                        </div>
                        <div className={classes.testimonials__container__slider__arrows__rightarrow}>
                            <AiOutlineArrowRight onClick={this.next}  />
                        </div>
                        
                    </div>
                </div>
            </section>
        
        )
    }
}
