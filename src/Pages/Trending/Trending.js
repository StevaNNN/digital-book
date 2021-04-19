import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const trending = props => {
    const {
        books
    } = props

    return (
        <div>
            <BookLists
                {...props}
                books={books}
            />
        </div>
    );
}

export default trending;
