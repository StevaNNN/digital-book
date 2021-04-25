import React from 'react';
import classes from './BookCard.module.scss';
import Button from "../UI/Button/Button";
import classNames from "classnames";

const bookCard = props => {

    const {
        title,
        author,
        src,
        alt,
        genres,
        submitLabel,
        onSubmit,
        onClick,
        onPage
    } = props;

    const bookClasses = classNames(
        classes.BookCard,
        {
            [classes.BookOnPage]: onPage
        }
    );

    return(
        <div
            onClick={onClick}
            className={bookClasses}
            tabIndex={0}
        >
            <img
                src={src}
                alt={alt}
                className={classes.BookThumb}
            />
            {genres && <>
                <div className={classes.BookCardContent}>
                    <h3 className={`db-text-color-dark`}>{title}</h3>
                    <p className={`db-text-color db-font-semibold`}>{author}</p>
                    <div className={classes.BookGenres}>
                        {genres.map((genre, index) => {
                            return(
                                <div key={index} className={classes.BookGenre}>{genre}</div>
                            )
                        })}
                    </div>
                </div>
                <div className={classes.BookCardFooter}>
                    <Button
                        block
                        primary
                        rounded
                        large
                        onClick={onSubmit}
                        additionalClass={classes.BookBtn}
                    >
                        {submitLabel}
                    </Button>
                </div>
            </>
            }
        </div>
    )
}

export default bookCard;
