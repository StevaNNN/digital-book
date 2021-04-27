import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
import classNames from "classnames";

const navigationItems = props => {

    const {
        sideDrawerToolbar,
        tabIndexInSideDrawer,
        footer
    } = props;

    let extra =  sideDrawerToolbar || footer ? <>
        <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/about" >About</NavigationItem>
        <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/languages" >Languages</NavigationItem>
    </> : null

    const navigationItemsClasses = classNames(
        classes.NavigationItems,
        {
            [classes.notHiddenBellow]:  footer || sideDrawerToolbar
        }
    )

    return(
        <ul className={navigationItemsClasses}>
            {/*<NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/">Home</NavigationItem>*/}
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/top-rated" >TopRated</NavigationItem>
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/trending">Trending</NavigationItem>
            <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/genres" >Genres</NavigationItem>
            {extra && <>
                <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/about" >About</NavigationItem>
                <NavigationItem inFooter={footer} tabIndex={tabIndexInSideDrawer} link="/languages" >Languages</NavigationItem>    
            </>}
        </ul>
    )
}

export default navigationItems;