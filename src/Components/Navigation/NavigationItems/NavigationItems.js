import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigationItems = props => {

    const {
        sideDrawerToolbar,
        tabIndexInSideDrawer,
        footer
    } = props;

    let extra =  sideDrawerToolbar ? <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/about" >About</NavigationItem> : null

    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/">Home</NavigationItem>
            {extra}
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/top-rated" >TopRated</NavigationItem>
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/trending">Trending</NavigationItem>
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/genres" >Genres</NavigationItem>
            {footer && <>
                <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/about" >About</NavigationItem>
                <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/languages" >Languages</NavigationItem>    
            </>}
        </ul>
    )
}

export default navigationItems;