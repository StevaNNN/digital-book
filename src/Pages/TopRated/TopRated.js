import React from 'react';
import BookLists from "../../Containers/BookLists/BookLists";

const topRated = props => {
    const { books } = props;

    return (
        <div>
            <BookLists
                {...props}
                books={books}
            />
        </div>
    );
}

export default topRated;
