import React from 'react';
import classes from './BookCard.module.scss';
import Button from "../UI/Button/Button";

const bookCard = (props) => {

    const {
        genres,
        onClick,
        src,
        alt,
        title,
        author,
        onSubmit
    } = props;

    return(
        <div
            onClick={onClick}
            className={classes.BookCard}
            tabIndex={0}
        >
            <img
                src={src}
                alt={alt}
                className={classes.BookThumb}
            />
            {genres && <>
                <div>{title}</div>
                <div>{author}</div>
                <div className={classes.BookGenres}>
                    {genres.map((genre, index) => {
                        return(
                            <div key={index} className={classes.BookGenre}>{genre}</div>
                        )
                    })}
                </div>
                <Button
                    block
                    primary
                    rounded
                    large
                    onClick={onSubmit}
                    additionalClass={classes.BookBtn}
                >
                    Buy
                </Button>
            </>
            }
        </div>
    )
}

export default bookCard;
