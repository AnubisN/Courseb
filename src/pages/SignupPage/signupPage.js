import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./signup.module.scss";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import Alert from "../../components/Alert/Alert";
import Loader from "../../components/Loader/loader";

function SignupPage() {
  let navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

  const renderError = (errorMessage) => (
    <span className={classes.validation__errors}>{errorMessage}</span>
  );

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword || !regex.test(password)) return;
    dispatch(register(firstName, lastName, email, password));
  };

  const checkPassword = (e) => {
    let pass = e.target.value;
    setPassword(pass);
    regex.test(pass)
      ? setPasswordError("")
      : setPasswordError(
          "Min 8 letter password, with at least a symbol, upper and lower case letters and a number"
        );
  };

  const checkConfirmPassword = (e) => {
    let pass = e.target.value;
    setConfirmPassword(pass);
    password !== pass
      ? setConfirmPasswordError("Password and confirm password does not match")
      : setConfirmPasswordError("");
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Alert message={error} variant="danger" />}
      {message && <Alert message={message} variant="danger" />}
      <section className={classes.container}>
        <div className={classes.container__imgBx}>
          <img src="login.jpg" />
        </div>
        <div className={classes.container__contentBx}>
          <div className={classes.container__contentBx__formBx}>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <span>First Name</span>
                <input
                  type="text"
                  name=""
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <span>Last Name</span>
                <input
                  type="text"
                  name=""
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <span>Email</span>
                <input
                  type="email"
                  name=""
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <span>Password</span>
                <input
                  type="password"
                  name=""
                  required
                  value={password}
                  onChange={(e) => checkPassword(e)}
                />
                {passwordError && renderError(passwordError)}
              </div>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <span>Confirm Password</span>
                <input
                  type="password"
                  name=""
                  required
                  value={confirmPassword}
                  onChange={(e) => checkConfirmPassword(e)}
                />
                {confirmPasswordError && renderError(confirmPasswordError)}
              </div>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <Button className={classes.button} type="primary__small">
                  Register
                </Button>
              </div>
              <div className={classes.container__contentBx__formBx__inputBx}>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;
