import React from 'react';
import DynamicPage from "../../Shared/DynamicPage/DynamicPage";

const topRated = (props) => {

    const { topRatedBooks } = props;

    return (
        <div>
            <DynamicPage books={topRatedBooks}/>
        </div>
    );
}

export default topRated;
