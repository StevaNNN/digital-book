import React from 'react';
import SliderAbstract from "../../../Components/SliderAbstract/SliderAbstract";
import classes from './Trending.module.scss';
import Button from "../../../Components/UI/Button/Button";

const trending = props => {
    const {
        bookClicked,
        goToTrendingPage,
        trendingBooks
    } = props;

    return(
        <section className={`db-section ${classes.Trending}`}>
            <div className={'db-section-wrapper'}>
                <div className={'db-section-header'}>
                    <h1 className={'db-section-title'}>Trending books</h1>
                    <Button onClick={goToTrendingPage}>More</Button>
                </div>
                <SliderAbstract
                    books={trendingBooks}
                    bookClicked={bookClicked}
                />
            </div>
        </section>
    );
}

export default trending;