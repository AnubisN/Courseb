import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import classes from "./Homepage.module.scss";
import TestimonialSlider from "./testimonialSlider";
import FAQSection from "./faqSection";
import WhyCoursebSection from "./whyCourseb";
import coursebReasons from "../../data/whyCourseb";
import PopularCourses from "./popularCourse";
import { useDispatch, useSelector } from "react-redux";
import { listCourse } from "../../actions/courseActions";
import { listFAQs } from "../../actions/faqActions";
import { listTestimonials } from "../../actions/testimonialActions";
import Loader from "../../components/Loader/loader";
import Alert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const coursesList = useSelector((state) => state.courseList);
  const { error, loading, courses } = coursesList;
  const faqList = useSelector((state) => state.faqList);
  const { faqs } = faqList;
  const testimonialList = useSelector((state) => state.testimonialList);
  const { testimonials } = testimonialList;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popCourses = courses.sort((a, b) => a.review - b.review);

  useEffect(() => {
    dispatch(listCourse());
    dispatch(listFAQs());
    dispatch(listTestimonials());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/courses");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert message={error} variant="danger" />
      ) : (
        <>
          <section className={classes.container}>
            <div className={classes.hero__container}>
              <div className={classes.hero__container__content}>
                <h1 className={classes.hero__container__content__title}>
                  Learn job ready <br /> courses online
                </h1>
                <p>
                  Learn new skills with the colleague like you <br />
                  and apply for the job
                </p>
                <form onSubmit={onSubmitHandler}>
                  <Button className={classes.button} type="primary__body">
                    Explore Courses
                  </Button>
                </form>
              </div>
              <div className={classes.hero__container__img}>
                <img src="girl.png" />
              </div>
            </div>

            <div className={classes.container__bg}></div>
          </section>

          {popCourses.length === 6 ? (
            <PopularCourses courses={popCourses} />
          ) : courses.length > 6 ? (
            <PopularCourses courses={courses.slice(0, 6)} />
          ) : (
            <PopularCourses courses={courses.slice(0, 3)} />
          )}
          <WhyCoursebSection coursebReasons={coursebReasons} />
          <FAQSection faqs={faqs} />
          <TestimonialSlider testimonials={testimonials} />
        </>
      )}
    </>
  );
}

export default Homepage;
