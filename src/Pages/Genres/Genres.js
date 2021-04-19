import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const genres = props => {
    const {
        books
    } = props;

    return (
        <div>
            <BookLists
                {...props}
                extra
                books={books}
            />
        </div>
    );
}

export default genres;