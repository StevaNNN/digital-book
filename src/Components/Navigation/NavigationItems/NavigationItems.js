import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigationItems = props => {

    const {
        sideDrawerToolbar,
        tabIndexInSideDrawer
    } = props;

    return(
        <ul className={classes.NavigationItems}>
            {sideDrawerToolbar && <>
                <NavigationItem tabIndex={tabIndexInSideDrawer} link="/">Home</NavigationItem>
                <NavigationItem tabIndex={tabIndexInSideDrawer} link="/about" >About</NavigationItem>
            </>}
            <NavigationItem tabIndex={tabIndexInSideDrawer} link="/top-rated" >TopRated</NavigationItem>
            <NavigationItem tabIndex={tabIndexInSideDrawer} link="/trending">Trending</NavigationItem>
            <NavigationItem tabIndex={tabIndexInSideDrawer} link="/genres" >Genres</NavigationItem>
        </ul>
    )
}

export default navigationItems;