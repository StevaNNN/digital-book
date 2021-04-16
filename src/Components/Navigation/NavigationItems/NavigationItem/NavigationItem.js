import React from "react";
import {NavLink} from "react-router-dom";
import classes from './NavigationItem.module.scss';
import classNames from "classnames";

const navigationItem = props => {

    const {
        children,
        link,
        inFooter
    } = props;

    const navItemClass = classNames(
        classes.NavigationItem,
        {
            [classes.inFooter]: inFooter
        }
    )

    return(
        <li className={navItemClass}>
            <NavLink
                to={link}
                activeClassName={link !== "/" ? classes.active : null}
            >
                {children}
            </NavLink>
        </li>
    );
}

export default navigationItem;