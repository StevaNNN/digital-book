import React from "react";
import {NavLink} from "react-router-dom";
import classes from './NavigationItem.module.scss';

const navigationItem = props => {
    return(
        <li >
            <NavLink to={props.link}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default navigationItem;