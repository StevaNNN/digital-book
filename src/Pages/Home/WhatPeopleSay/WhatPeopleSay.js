import React from 'react';
import classes from './WhatPeopleSay.module.scss';

const whatPeopeleSay = () => {

    return(
        <section className={`db-section`}>
            <div className={'db-section-wrapper'}>
                <div className={`db-section-header ${classes.WhatPeopleSayHeader}`}>
                    <h1 className={'db-section-title'}>What People are saying</h1>
                </div>
                <div className={classes.CommentsWrap}>
                    <div className={`${classes.Comment} db-text-color`}>
                        <div className={classes.CommentDetails}>
                            <h3 className={'db-text-color-accent'}>Fast to find books</h3>
                            <p>
                                <i aria-hidden="true" className={'db-icon db-format_quote'}/>
                                This site is brilliant! I’m a regular free audio book listener and can always find something quickly with just a few clicks.
                                <i aria-hidden="true" className={'db-icon db-format_quote'}/>
                            </p>
                        </div>
                        <div className={classes.Person}>
                            <div>
                                <img src="https://placeimg.com/40/40/people" alt="Christina Martin"/>
                            </div>
                            <div className={'db-font-size-sm'}>
                                <p className={'db-font-semibold'}>Christina Martin</p>
                                <p>Content Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.Comment} db-text-color`}>
                        <div className={classes.CommentDetails}>
                            <h3 className={'db-text-color-accent'}>Clean simple design</h3>
                            <p>
                                <i aria-hidden="true" className={'db-icon db-format_quote'}/>
                                I love the clean and simple design. The site has great features too, like the online audio player and personal bookshelf.
                                <i aria-hidden="true" className={'db-icon db-format_quote'}/>
                            </p>
                        </div>
                        <div className={classes.Person}>
                            <div>
                                <img src="https://placeimg.com/40/40/people" alt="Christina Martin"/>
                            </div>
                            <div className={'db-font-size-sm'}>
                                <p className={'db-font-semibold'}>Esteban Rosero</p>
                                <p>Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.Comment} db-text-color`}>
                        <div className={`${classes.CommentDetails}`}>
                            <h3 className={'db-text-color-accent'}>Great free resource</h3>
                            <p>
                                <i aria-hidden="true" className={'db-icon db-format_quote'}/>
                                As an English teacher it’s an excellent resource for my students. With thousands of free eBooks from numerous sources.
                                <i aria-hidden="true" className={'db-icon db-format_quote'}/>
                            </p>
                        </div>
                        <div className={classes.Person}>
                            <div>
                                <img src="https://placeimg.com/40/40/people" alt="Christina Martin"/>
                            </div>
                            <div className={'db-font-size-sm'}>
                                <p className={'db-font-semibold'}>Rose Dadley</p>
                                <p>English Language Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default whatPeopeleSay;
