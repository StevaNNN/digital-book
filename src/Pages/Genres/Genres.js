import React from 'react';
import DynamicPage from "../../Containers/DynamicPage/DynamicPage";

const genres = (props) => {
    const {
        books
    } = props

    return (
        <div>
            <DynamicPage books={books} genrePage/>
        </div>
    );
}

export default genres;
