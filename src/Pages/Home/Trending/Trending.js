import React from 'react';
import SliderAbstract from "../../../Components/SliderAbstract/SliderAbstract";
import { genrePicker } from "../../../Util";
import classes from './Trending.module.scss';
import Button from "../../../Components/UI/Button/Button";

const trending = props => {
    let topRatedBooks = genrePicker('trending');
    const { bookClicked } = props;

    return(
        <section className={`db-section ${classes.Trending}`}>
            <div className={'db-section-header'}>
                <h1>Trending books</h1>
                <Button>More</Button>
            </div>
            <SliderAbstract books={topRatedBooks} bookClicked={bookClicked}/>
        </section>
    );
}

export default trending;