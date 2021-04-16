import React from "react";
import classes from './Footer.module.scss';
import SocialBar from "../../Components/SocialBar/SocialBar";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
import Logo from "../../Components/Logo/Logo";

const footer = (props) => {
    const {onClickScroll} = props;

    return(
       <>
           <footer className={`db-section ${classes.Footer}`}>
               <div className={classes.Wrapper}>
                   <div className={classes.FooterGroup}>
                       <Logo/>
                   </div>
                   <div className={classes.FooterGroup}>
                       <h3 className={classes.heading}>WebApp Navigation</h3>
                       <NavigationItems footer/>
                       <button onClick={(event) => onClickScroll(event)} className={classes.Button}>Genre</button>
                       <button onClick={(event) => onClickScroll(event)} className={classes.Button}>Languages</button>
                   </div>
                   <div className={classes.FooterGroup}>
                       <h3>Social network links</h3>
                       <SocialBar/>
                   </div>
               </div>
           </footer>
           <p className="db-cp db-text-color">©2010-2021 Digitalbook.io is part of Digitalbook Ltd. All rights reserved</p>
       </>
    )
}

export default footer;
