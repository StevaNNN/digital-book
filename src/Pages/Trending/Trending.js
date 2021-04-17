import React from 'react';
import DynamicPage from "../../Containers/DynamicPage/DynamicPage";

const trending = (props) => {
    const {
        books
    } = props

    return (
        <div>
            <DynamicPage
                {...props}
                books={books}
            />
        </div>
    );
}

export default trending;
