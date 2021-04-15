import React from "react";
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop';
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import SocialBar from "../../SocialBar/SocialBar";
import classes from './SideDrawer.module.scss';

const sideDrawer = props => {

    const {
        opened,
        backDropUp,
        backDropClicked,
        onCloseSideBarClick
    } = props;

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (opened) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <>
            <BackDrop
                show={backDropUp}
                clicked={backDropClicked}
            />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.DrawerToggler}>
                    <DrawerToggle clicked={onCloseSideBarClick} inSideBar />
                </div>
                <nav>
                    <NavigationItems sideDrawerToolbar tabIndexInSideDrawer={opened ? 0 : -1}/>
                </nav>
                <SocialBar tabIndexInSideDrawer={opened ? 0 : -1}/>
            </div>
        </>
    );
}

export default sideDrawer;