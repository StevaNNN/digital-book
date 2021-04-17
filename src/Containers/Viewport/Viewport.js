import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from '../../Components/Navigation/Header/Header';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import TopRated from "../../Pages/TopRated/TopRated";
import Home from '../../Pages/Home/Home';
import Trending from "../../Pages/Trending/Trending";
import Genres from "../../Pages/Genres/Genres";
import Languages from "../../Pages/Languages/Languages";
import Footer from "../../Shared/Footer/Footer";
import About from "../../Pages/About/About";
import {genrePicker} from "../../Util";

class Viewport extends React.Component {

    state = {
        backDropActive: false,
        scrollInto: '',
        trendingBooks: [],
        topRatedBooks: []
    }

    componentDidMount() {
        this.setState({
            trendingBooks: genrePicker('Trending'),
            topRatedBooks: genrePicker('Top-Rated')
        })
    }

    openBackdrop = () => {
        this.setState({ backDropActive: true })
    }

    toggleBackdrop = () => {
        // we should use this way when comparing states because of async set of state
        this.setState( (prevState) => {
            return { backDropActive: !prevState.backDropActive }
        })
    }

    onClickScroll = (e) => {
        this.setState({
            scrollInto: e.target.innerHTML
        })
    }

    render() {
        const {backDropActive} = this.state;

        return(
            <>
                <Header clicked={this.openBackdrop}/>
                <SideDrawer
                    opened={backDropActive}
                    backDropUp={backDropActive}
                    backDropClicked={this.toggleBackdrop}
                    onCloseSideBarClick={this.toggleBackdrop}
                />
                <main>
                    <Switch>
                        <Route
                            path={'/top-rated'}
                            render={(routeProps) => <TopRated {...routeProps} books={this.state.topRatedBooks}/>}
                        />
                        <Route
                            path={'/trending'}
                            render={() => <Trending/>}
                        />
                        <Route
                            path={'/genres'}
                            render={() => <Genres/>}
                        />
                        <Route
                            path={'/languages'}
                            render={()=> <Languages/>}
                        />
                        <Route
                            path={'/about'}
                            render={() => <About/>}
                        />
                        <Route
                            path={"/"}
                            render={(routeProps) => <Home {...routeProps}/>}
                        />
                    </Switch>
                </main>
                <Footer onClickScroll={this.onClickScroll}/>
            </>
        );
    }
}

export default Viewport;
