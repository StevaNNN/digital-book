import React from 'react';
import Slider from "react-slick";
import BookCard from "../BookCard/BookCard";
import classes from './SliderAbstract.module.scss';

const sliderAbstract = (props) => {

    let sliderSettings = {
        infinite: false,
        slidesToShow: 5,
        speed: 250,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    }

    const { books, bookClicked } = props

    let content = books && books.map((book, index) => {
        return(
            <BookCard
                onClick={() => bookClicked(index)}
                src={book.thumbnail}
                alt={book.title}
                key={index}
            />
        )
    })
    return(
        <div className={classes.SliderWrap}>
            <Slider {...sliderSettings} className={'db-slider'}>
                {content}
            </Slider>
        </div>
    )
}

export default sliderAbstract