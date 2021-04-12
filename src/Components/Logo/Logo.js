import React from "react";
import Burger from '../../Theme/resources/img/logo.svg'
import classes from './Logo.module.scss';
import {NavLink} from "react-router-dom";

const logo = props => {
    return(
        <NavLink className={classes.Logo} to={'/'}>
            <img src={Burger} alt="digital-book"/>
        </NavLink>
    )
}

export default logo;