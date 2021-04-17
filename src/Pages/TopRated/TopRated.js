import React from 'react';
import DynamicPage from "../../Containers/DynamicPage/DynamicPage";

const topRated = (props) => {
    const { books } = props;

    return (
        <div>
            <DynamicPage
                {...props}
                books={books}
            />
        </div>
    );
}

export default topRated;
