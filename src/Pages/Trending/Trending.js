import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const trending = props => {
    const {
        books,
        selectedBook
    } = props;

    const passSelectedBookToParent = book => selectedBook(book);

    return (
        <div>
            <BookLists
                {...props}
                books={books}
                selectedBook={passSelectedBookToParent}
            />
        </div>
    );
}

export default trending;
