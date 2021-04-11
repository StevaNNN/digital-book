import React from "react";
import Burger from '../../theme/resources/img/logo.svg'
import classes from './Logo.module.scss';

const logo = props => {
    return(
        <div className={classes.logo}>
            <img src={Burger} alt="digital-book"/>
        </div>
    )
}

export default logo;