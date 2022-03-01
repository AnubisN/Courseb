import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import classes from './dropdownButton.module.scss'

function DropdownButton({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Rating','Enrolled Date'];
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
                            options.map(option => (
                                <div 
                                    key={option}
                                    className={classes.dropdown_item} 
                                    onClick={e => {
                                        setSelected(option);
                                        setIsActive(false); 
                                        }} >
                                    {option}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default DropdownButton