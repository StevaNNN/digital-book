import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const languages = props => {

    const {
        books,
        selectedBook
    } = props;

    const passSelectedBookToParent = book => selectedBook(book);

    return (
        <BookLists
            {...props}
            languages
            selectedBook={passSelectedBookToParent}
            books={books}
        />
    );
}

export default languages;
