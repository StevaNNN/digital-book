import React from 'react';
import DynamicPage from "../../Shared/DynamicPage/DynamicPage";
import data from "../../data.json";

class Trending extends React.Component{

    render() {
        return (
            <div>
                <DynamicPage books={data.books}/>
            </div>
        );
    }
}

export default Trending;