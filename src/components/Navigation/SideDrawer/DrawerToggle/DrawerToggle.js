import React from "react";
import classes from  './DrawerToggle.module.scss';
import Button from "../../../UI/Button/Button";

const drawerToggle = props => {
    return(
        <div className={classes.DrawerToggle}>
            <Button
                aria={{label: "toggle-drawer"}}
                onClick={props.clicked}
                look="flat"
                iconClass="db-icon db-menu"
            />
        </div>
    )
}

export default drawerToggle;