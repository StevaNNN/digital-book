import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {

    trt = () => {
        const test = document.getElementsByTagName("html");
        test[0].scrollTo(0,0)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.trt();
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);