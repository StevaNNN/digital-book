import React from 'react';
import classes from './SocialBar.module.scss';

const socialBar = (props) => {

    const {tabIndexInSideDrawer} = props;
    return(
        <div className={classes.SocialBar}>
            <a
                tabIndex={tabIndexInSideDrawer}
                href="www.facebook.com"
                target={"blank"}
                className={classes.facebook}
            >
                <span className="sr-only">facebook</span>
            </a>
            <a
                tabIndex={tabIndexInSideDrawer}
                href="www.instagram.com"
                target={"blank"}
                className={classes.instagram}
            >
                <span className="sr-only">instagram</span>
            </a>
            <a
                tabIndex={tabIndexInSideDrawer}
                href="www.twitter.com"
                target={"blank"}
                className={classes.twitter}
            >
                <span className="sr-only">twitter</span>
            </a>
        </div>
    )
}

export default socialBar;