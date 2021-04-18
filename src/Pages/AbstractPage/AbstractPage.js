import React from 'react';
import {genrePicker, langPicker} from '../../Util';

const AbstractPage = (props) => {
    // could be optimizes with charAt some position to match the real genre name but unneccessary...
    const booksByGenre = genrePicker(props.match.params.genre);
    const booksByLang = langPicker(props.match.params.lang);
    
    const { genre } = props;

    let arrayOfBooks;

    if (genre) {
        arrayOfBooks = booksByGenre.map((book, index) => <div key={index}>{book.title}</div>)
    } else {
        arrayOfBooks = booksByLang.map((book, index) => <div key={index}>{book.title}</div>)
    }

    return (
        <div>
            {arrayOfBooks}
        </div>
    );
};

export default AbstractPage;