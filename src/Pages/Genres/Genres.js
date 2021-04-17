import React from 'react';
import DynamicPage from "../../Containers/DynamicPage/DynamicPage";

const genres = (props) => {
    const {
        books
    } = props;

    return (
        <div>
            <DynamicPage
                {...props}
                extra
                books={books}
            />
        </div>
    );
}

export default genres;
