import React from 'react';
import classes from './Genres.module.scss';

const genres = (props) => {
    return(
        <section className={`db-section ${classes.Genres}`}>
            <div className={classes.GenresWrap}>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.people}/>
                    <span>Young Adult</span>
                    <span>2</span>
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.romance}/>
                    Romance
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.mystery}/>
                    Mystery
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.child}/>
                    Children's
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.history}/>
                    History
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.horror}/>
                    Horror
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.fantasy}/>
                    Fantasy
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.fiction}/>
                    Fiction
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.classics}/>
                    Classics
                </div>
                <div className={classes.Genre}>
                    <i aria-hidden="true" className={classes.sciFi}/>
                    Sci-Fi
                </div>
            </div>
        </section>
    )
}

export default genres;