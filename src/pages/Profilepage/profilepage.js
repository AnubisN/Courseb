import React, { useState, useEffect, useRef } from "react";
import classes from "./profilepage.module.scss";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiLockFill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserDetails,
  updateUserProfile,
  updateUserProfilePicture,
} from "../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Alert from "../../components/Alert/Alert";
import Loader from "../../components/Loader/loader";
import { FaPlus } from "react-icons/fa";

function ProfilePage() {
  let navigate = useNavigate();
  let fileInput = useRef();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const userUpdatePicture = useSelector((state) => state.userUpdatePicture);
  const { image } = userUpdatePicture;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");
  const [staticPicture, setStaticPicture] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.first_name || success || image) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails(userInfo.id));
      } else {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setPhoneNumber(user.phoneNumber);
        setJob(user.job);
        setAddress(user.address);
        setStaticPicture(user.profilePicture);
      }
    }
  }, [navigate, userInfo, user, success]);

  function getExtension(filename) {
    var parts = filename.split(".");
    return parts[parts.length - 1];
  }

  function isImage(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case "jpg":
        return true;
      case "png":
        return true;
      default:
        return false;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (typeof profilePicture === "object") {
      let imgObj = Object(profilePicture);
      let name = imgObj[0].name;
      if (name) {
        let image = isImage(imgObj[0].name);
        if (image) {
          let formData = new FormData();
          formData.append("profilePicture", imgObj[0]);
          dispatch(updateUserProfilePicture(formData));
          dispatch(
            updateUserProfile({
              id: user._id,
              firstName: firstName,
              lastName: lastName,
              email: email,
              phoneNumber: phoneNumber,
              address: address,
              job: job,
            })
          );
        }
      }
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          job: job,
        })
      );
    }
  };

  return (
    <section>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert message={error} variant="danger" />
      ) : success || image ? (
        <Alert message={"Successfully updated"} variant="success" />
      ) : (
        <div className={classes.container}>
          <div className={classes.container__box}>
            <div className={classes.container__box__profile__tab}>
              <div
                className={classes.container__box__profile__tab__userContent}
              >
                <div
                  className={
                    classes.container__box__profile__tab__userContent__img
                  }
                >
                  <img src={`${staticPicture}`} />
                  <p style={{ textAlign: "center", margin: "1em 0" }}>
                    <strong>
                      {user ? user.first_name + " " + user.last_name : null}
                    </strong>
                  </p>
                </div>

                <div className={classes.container__box__profile__tab__settings}>
                  <div
                    className={
                      classes.container__box__profile__tab__settings__accountNav
                    }
                  >
                    <AiFillHome />
                    <a>Account</a>
                  </div>
                  <div
                    className={
                      classes.container__box__profile__tab__settings__passwordNav
                    }
                  >
                    <RiLockFill />
                    <Link className={classes.link} to="/changePassword">
                      Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.container__box__profile__tab__content}>
              <h2>Account Settings</h2>
              <div
                className={
                  classes.container__box__profile__tab__content__formBx
                }
              >
                <form onSubmit={submitHandler}>
                  <div className={classes.flex}>
                    <div className={classes.form__input}>
                      <span>First Name</span>
                      <input
                        type="text"
                        name=""
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={classes.form__input__inputs}
                        required
                      />
                    </div>
                    <div className={classes.form__input}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        name=""
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className={classes.flex}>
                    <div className={classes.form__input}>
                      <span>Email</span>
                      <input type="email" name="" value={email} required />
                    </div>
                    <div className={classes.form__input}>
                      <span>Phone Number</span>
                      <input
                        type="text"
                        name=""
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={classes.flex}>
                    <div className={classes.form__input}>
                      <span>Address</span>
                      <input
                        type="text"
                        name=""
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className={classes.form__input}>
                      <span>Job</span>
                      <input
                        type="text"
                        name=""
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <div className={classes.flex}>
                                    <div className={classes.form__input__file}>
                                        <input 
                                            type="file" 
                                            name=""
                                            ref={fileInput}
                                            onChange={(e) => setProfilePicture(e.target.files)}
                                            />
                                        <FaPlus />
                                    </div>
                               </div> */}

                  <span>Upload new picture</span>
                  <div className={classes.file__card}>
                    <div className={classes.file__inputs}>
                      <input
                        type="file"
                        ref={fileInput}
                        onChange={(e) => setProfilePicture(e.target.files)}
                      />
                      <div className={classes.button}>
                        <FaPlus />
                      </div>
                    </div>

                    <p className="main">Supported files</p>
                    <p class="info">JPG,PNG</p>
                  </div>
                  {profilePicture[0] && (
                    <span>
                      Selected file:{" "}
                      <span className={classes.imageFile}>
                        {profilePicture[0].name}
                      </span>
                    </span>
                  )}

                  <div className={classes.flex}>
                    <div className={classes.form__input__file}>
                      <Button className={classes.button} type="primary__small">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfilePage;
