import React from "react";
import classes from  './DrawerToggle.module.scss';
import Button from "../../../UI/Button/Button";

const drawerToggle = props => {

    const {
        clicked,
        inSideBar
    } = props;

    return(
        <div className={classes.DrawerToggle}>
            <Button
                aria={{label: "toggle-drawer"}}
                onClick={clicked}
                look="flat"
                iconClass={`db-icon ${inSideBar ? 'db-close' : 'db-menu'}`}
            />
        </div>
    )
}

export default drawerToggle;