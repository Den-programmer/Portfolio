import React from 'react'
import classes from './linkBtn.module.scss'

const LinkBtn = (props) => {
    return (
        <button style={props.isFirst ? { marginRight: '17px' } : { marginLeft: '17px' }} className={classes.navPanel__btn}>
            <span style={{ zIndex: '100' }}>{props.children}</span>
            <span className={classes.hoverBackground}></span>
        </button>
    )
}

export default LinkBtn