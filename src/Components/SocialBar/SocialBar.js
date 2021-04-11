import React from 'react';
import classes from './SocialBar.module.scss';

const socialBar = () => {
    return(
        <div className={classes.SocialBar}>
            <a href="www.facebook.com" target={"blank"} aria-label="facebook" className={classes.facebook}/>
            <a href="www.instagram.com" target={"blank"} aria-label="instagram" className={classes.instagram}/>
            <a href="www.twitter.com" target={"blank"} aria-label="twitter" className={classes.twitter}/>
        </div>
    )
}

export default socialBar;