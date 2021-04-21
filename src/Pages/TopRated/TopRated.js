import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const topRated = props => {
    const {
        books,
        selectedBook
    } = props;

    const passSelectedBookToParent = book => selectedBook(book);

    return (
        <BookLists
            {...props}
            books={books}
            selectedBook={passSelectedBookToParent}
        />
    );
}

export default topRated;
