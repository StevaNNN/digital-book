import React from "react";
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
    return(
        <ul className={classes.NavigationItems}>
            {props.sideDrawerToolbar && <>
                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/about" >About</NavigationItem>
            </>}
            <NavigationItem link="/trending">Trending</NavigationItem>
            <NavigationItem link="/top-rated" >TopRated</NavigationItem>
            <NavigationItem link="/genres" >Genres</NavigationItem>
        </ul>
    )
}

export default navigationItems;