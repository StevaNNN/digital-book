import React from 'react';
import SliderAbstract from "../../../Components/SliderAbstract/SliderAbstract";
import { genrePicker } from "../../../Util";
import classes from './TopRated.module.scss';
import Button from "../../../Components/UI/Button/Button";

const TopRated = props => {
    let topRatedBooks = genrePicker('top-rated');
    const { bookClicked } = props;

    return(
        <section className={`db-section ${ classes.TopRated }`}>
            <div className={'db-section-header'}>
                <h1>Top rated books</h1>
                <Button>More</Button>
            </div>
            <SliderAbstract books={ topRatedBooks } bookClicked={ bookClicked }/>
        </section>
    );
}

export default TopRated;