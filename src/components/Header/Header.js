import React, {useState, useEffect, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Button from '../Button/Button';
import { logout } from '../../actions/userActions';

function HeaderUserInfo({ userInfo }) {
    const { first_name, profilePicture } = userInfo;
    const dispatch = useDispatch()
    const [toggle,setToggle] = useState(false)
    const menuToggle = () => {
        setToggle(!toggle)
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          if(toggle && ref.current && !ref.current.contains(e.target)) {
            setToggle(false);
          }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
          document.removeEventListener("click",checkIfClickedOutside);
        }
      }, [toggle])

    return(
        <div className={classes.user} ref={ref}>
            <ul>
                <li>
                    <a onClick={menuToggle}>
                        <p className={classes.user__name}>{first_name}</p>
                        <img src={`${profilePicture}`} width="50" height="50"/>
                    </a>
                    <div className={classes.dropdown} style={{display: toggle ? 'block' : 'none'}}>
                        <ul>
                            <li>
                                <Link to="/accountSettings" onClick={menuToggle}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="enrolledCourses" onClick={menuToggle}>
                                    My Courses
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

function HeaderButtons() {
    return(
        <>
            <Link to="/login">
                <Button className={classes.button} type="secondary__small">
                    Log in    
                </Button>
            </Link>
            <Link to="/register" >
                <Button className={classes.button} type="primary__small">
                    Register    
                </Button>
            </Link>
        </>
    )
}

function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        const getSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("load", getSize);
        return () => window.removeEventListener("load",getSize);
    },[])

    useEffect(() => {
        if(size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <div className={classes.header__content__logo}>
                    <Link to="/">
                    <img src="/logo_new.png" />    
                    </Link>
                </div> 

                <nav 
                className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : "" }`}
                >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                    {
                        userInfo ? 
                        <HeaderUserInfo userInfo = {userInfo} />
                        :
                        <HeaderButtons />
                    }
                </nav>
                <div className={classes.header__content__toggle}>
                    { !menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
