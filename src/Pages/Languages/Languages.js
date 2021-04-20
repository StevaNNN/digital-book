import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const languages = props => {

    const {
        books
    } = props

    return (
        <div>
            <BookLists
                {...props}
                languages
                books={books}
            />
        </div>
    );
}

export default languages;
