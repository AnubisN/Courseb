import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import classes from './course.module.scss'

function CourseSort({ selected, setSelected, category }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={classes.dropdown}>
            <div className={classes.dropdown_btn} onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <FaCaretDown />
            </div>
            {
                isActive && (
                    <div className={classes.dropdown_content}>
                        {
                            category.map(ca => (
                                <div 
                                    key={ca._id}
                                    className={classes.dropdown_item} 
                                    onClick={e => {
                                        setSelected(ca.name);
                                        setIsActive(false); 
                                        }} >
                                    {ca.name}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default CourseSort