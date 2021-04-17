import React from 'react';
import classes from './SocialBar.module.scss';

const socialBar = (props) => {

    const {tabIndexInSideDrawer} = props;

    const onSocialClick = (e, link) => {
        e.preventDefault();
        const win = window.open(link, '_blank');
        if(!win != null) {
            win.focus();
        }
    }
    return(
        <div className={classes.SocialBar}>
            <a
                tabIndex={tabIndexInSideDrawer}
                href={"/"}
                aria-label={'facebook'}
                onClick={(event) => onSocialClick(event,'https://www.facebook.com')}
                className={classes.facebook}
            >
                <span className="sr-only">facebook</span>
            </a>
            <a
                tabIndex={tabIndexInSideDrawer}
                href={"/"}
                aria-label={'instagram'}
                onClick={(event) => onSocialClick(event,'https://www.instagram.com')}
                className={classes.instagram}
            >
                <span className="sr-only">instagram</span>
            </a>
            <a
                tabIndex={tabIndexInSideDrawer}
                href={"/"}
                aria-label={'twitter'}
                onClick={(event) => onSocialClick(event,'https://www.twitter.com')}
                className={classes.twitter}
            >
                <span className="sr-only">twitter</span>
            </a>
        </div>
    )
}

export default socialBar;