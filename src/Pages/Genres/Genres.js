import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const genres = props => {
    const {
        books,
        selectedBook
    } = props;

    const passSelectedBookToParent = book => selectedBook(book);

    return (
        <BookLists
            {...props}
            books={books}
            genre
            selectedBook={passSelectedBookToParent}
        />
    );
}

export default genres;
