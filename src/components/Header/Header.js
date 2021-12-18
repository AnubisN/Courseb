import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss';

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Button from '../Button/Button';

function Header() {
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
                    <img src="/logo.png" />    
                </div> 

                <nav 
                className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : "" }`}
                >
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Courses</a>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <a>Gallery</a>
                        </li>
                    </ul>
                    <Button className={classes.button} type="secondary__small">
                        Log in    
                    </Button>
                    <Button className={classes.button} type="primary__small">
                        Register    
                    </Button>
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