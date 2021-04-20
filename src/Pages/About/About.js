import React from 'react';
import classes from './About.module.scss';

class About extends React.Component{

    render() {
        return (
            <div className={`${classes.About} db-text-color db-font-size-lg`}>
                <section className={'db-section'}>
                    <div className={`db-section-wrapper`}>
                        <h1 className={"db-font-semibold"}>What</h1>
                        <p>We are a place to find free public domain audio books and eBooks.</p>
                        <p>You can explore over 100,000 Kindle, ePUB, and audio books using our free bookshelves.</p>
                        <p>Our powerful search engine not only looks hard for free digital books from great sources such as </p>
                    </div>
                </section>
                <section className={'db-section'}>
                    <div className={`db-section-wrapper`}>
                        <h1 className={"db-font-semibold"}>Why</h1>
                        <p>Our goal is to help as many people as possible find and enjoy digital books.</p>
                        <p>We wanted to build an experience that was simple, easy-to-use and accessible no matter where you are in the world.</p>
                        <p>To provide a solution that works across thousands of device and platform combinations; on mobile, tablet or desktop.</p>
                    </div>
                </section>
                <section className={'db-section'}>
                    <div className={`db-section-wrapper`}>
                        <h1 className={"db-font-semibold"}>How</h1>
                        <p>With only one rule: keep it simple.</p>
                        <p>We ensure best practice in such areas as accessibility, technology and security..</p>
                        <p>You can find an overview of our solution on the tech page.</p>

                    </div>
                </section>
                <section className={'db-section'}>
                    <div className={`db-section-wrapper`}>
                        <h1 className={"db-font-semibold"}>Who</h1>
                        <ul className={classes.WhoSection}>
                            <li>
                                <div>
                                    <h4>Stevan Stojanovic</h4>
                                    <img src={"https://placeimg.com/300/300/people"} alt="Stevan"/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Petar Petrovic</h4>
                                    <img src={"https://placeimg.com/300/300/people"} alt="Petar"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={'db-section'}>
                    <div className={`db-section-wrapper`}>
                        <h1 className={"db-font-semibold"}>The legal stuff</h1>
                        <p>Digitalbook is a participant in the Amazon Services LLC Associates Program , an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to the Amazon LLC marketplaces.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;