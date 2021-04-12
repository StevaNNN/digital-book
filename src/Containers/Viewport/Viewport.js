import React from "react";
import Header from '../../Components/Navigation/Header/Header';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import TopRated from "../../Pages/Home/TopRated/TopRated";
import Home from '../../Pages/Home/Home';
import Trending from "../../Pages/Home/Trending/Trending";
import Genres from "../../Pages/Home/Genres/Genres";
import Languages from "../../Pages/Home/Languages/Languages";
import {Route, Switch} from "react-router-dom";
import classes from './Viewport.module.scss';
import Footer from "../../Components/Navigation/Footer/Footer";

class Viewport extends React.Component {

    state = {
        backDropActive: false
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
                <main className={classes.Main}>
                    <Switch>
                        <Route path={'/top-rated'} component={TopRated}/>
                        <Route path={'/trending'} component={Trending}/>
                        <Route path={'/genres'} component={Genres}/>
                        <Route path={'/languages'} component={Languages}/>
                        <Route path={'/'} component={Home}/>
                    </Switch>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Viewport;