import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.scss';

const sideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.opened) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <>
            <BackDrop shown={props.backDropUp} clicked={props.backDropClicked}/>
            <div
                className={attachedClasses.join(' ')}
            >
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems sideDrawerToolbar/>
                </nav>
            </div>
        </>
    );
}

export default sideDrawer;