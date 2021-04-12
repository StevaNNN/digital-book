import React from "react";
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop';
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import SocialBar from "../../SocialBar/SocialBar";
import classes from './SideDrawer.module.scss';

const sideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.opened) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <>
            <BackDrop
                show={props.backDropUp}
                clicked={props.backDropClicked}
            />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.DrawerToggler}>
                    <DrawerToggle clicked={props.onCloseSideBarClick} inSideBar />
                </div>
                <nav>
                    <NavigationItems sideDrawerToolbar tabIndexInSideDrawer={props.opened ? 0 : -1}/>
                </nav>
                <SocialBar/>
            </div>
        </>
    );
}

export default sideDrawer;