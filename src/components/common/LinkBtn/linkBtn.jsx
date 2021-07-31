import React from 'react'
import classes from './linkBtn.module.scss'

const LinkBtn = (props) => {
    return (
        <button 
        style={props.isFirst ? { marginRight: '17px' } : props.isFirst === false ? { marginLeft: '17px' } : {}} 
        className={classes.navPanel__btn}>
            <span style={{ zIndex: '100' }}>{props.children}</span>
        </button>
    )
}

export default LinkBtn