import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigationItems = props => {
    return(
        <ul className={classes.NavigationItems}>
            {props.sideDrawerToolbar && <>
                <NavigationItem tabIndex={props.tabIndexInSideDrawer} link="/">Home</NavigationItem>
                <NavigationItem tabIndex={props.tabIndexInSideDrawer} link="/about" >About</NavigationItem>
            </>}
            <NavigationItem tabIndex={props.tabIndexInSideDrawer} link="/trending">Trending</NavigationItem>
            <NavigationItem tabIndex={props.tabIndexInSideDrawer} link="/top-rated" >TopRated</NavigationItem>
            <NavigationItem tabIndex={props.tabIndexInSideDrawer} link="/genres" >Genres</NavigationItem>
        </ul>
    )
}

export default navigationItems;