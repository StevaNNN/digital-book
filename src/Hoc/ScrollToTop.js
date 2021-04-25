import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {

    scrollToTop = () => {
        const test = document.getElementsByTagName("body");
        test[0].scrollTo(0,0)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.scrollToTop();
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);