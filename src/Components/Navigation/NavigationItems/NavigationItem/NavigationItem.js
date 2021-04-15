import React from "react";
import {NavLink} from "react-router-dom";
import classes from './NavigationItem.module.scss';

const navigationItem = props => {

    const {
        children,
        link
    } = props;

    return(
        <li className={classes.NavigationItem}>
            <NavLink
                to={link}
                activeClassName={classes.active}
            >
                {children}
            </NavLink>
        </li>
    );
}

export default navigationItem;