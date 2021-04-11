import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <Logo />
            <NavigationItems />
            <DrawerToggle clicked={props.clicked} />
        </header>
    )
}

export default toolbar;