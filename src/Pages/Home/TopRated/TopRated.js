import React from 'react';
import SliderAbstract from "../../../Components/SliderAbstract/SliderAbstract";
import classes from './TopRated.module.scss';
import Button from "../../../Components/UI/Button/Button";

const topRated = props => {
    const {
        bookClicked,
        goToTopRatedPage,
        topRatedBooks
    } = props;

    return(
        <section className={`db-section ${ classes.TopRated }`}>
            <div className={'db-section-wrapper'}>
                <div className={'db-section-header'}>
                    <h1 className={'db-section-title'}>Top rated books</h1>
                    <Button onClick={goToTopRatedPage}>More</Button>
                </div>
                <SliderAbstract
                    books={topRatedBooks}
                    bookClicked={bookClicked}
                />
            </div>
        </section>
    );
}

export default topRated;
