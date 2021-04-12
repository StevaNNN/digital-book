import React from 'react';
import classes from './SocialBar.module.scss';

const socialBar = () => {
    return(
        <div className={classes.SocialBar}>
            <a href="www.facebook.com" target={"blank"} className={classes.facebook}><span className="sr-only">facebook</span></a>
            <a href="www.instagram.com" target={"blank"} className={classes.instagram}><span className="sr-only">instagram</span></a>
            <a href="www.twitter.com" target={"blank"} className={classes.twitter}><span className="sr-only">twitter</span></a>
        </div>
    )
}

export default socialBar;