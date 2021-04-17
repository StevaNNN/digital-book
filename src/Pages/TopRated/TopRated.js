import React from 'react';
import DynamicPage from "../../Shared/DynamicPage/DynamicPage";

const topRated = (props) => {
    const { books } = props;

    return (
        <div>
            <DynamicPage books={books}/>
        </div>
    );
}

export default topRated;
