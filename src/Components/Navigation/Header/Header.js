import React from "react";
import classes from './Header.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const header = props => {

    const {clicked} = props;

    return(
        <header className={classes.Toolbar} id="header">
            <Logo />
            <NavigationItems />
            <DrawerToggle clicked={clicked} />
        </header>
    )
}

export default header;