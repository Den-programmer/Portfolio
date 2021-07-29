import React from 'react'
import { useState } from 'react'
import classes from './linkBtn.module.scss'

const LinkBtn = (props) => {
    const [isHovered, setIsHoveredStatus] = useState(false)
    const onMouseEnterHandler = () => setIsHoveredStatus(true)
    const onMouseLeaveHandler = () => setIsHoveredStatus(false)
    return (
        <button onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} style={props.isFirst ? { marginRight: '17px' } : { marginLeft: '17px' }} className={classes.navPanel__btn}>
            <span style={{ zIndex: '100' }}>{props.children}</span>
            <span className={isHovered ? classes.hoverBackground : ''}></span>
        </button>
    )
}

export default LinkBtn