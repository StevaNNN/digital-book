import React from "react";
import classes from './Layout.module.scss';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
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

        return(
            <>
                <Toolbar clicked={this.openBackdrop}/>
                <SideDrawer
                    opened={this.state.backDropActive}
                    backDropUp={this.state.backDropActive}
                    backDropClicked={this.toggleBackdrop}
                    onCloseSideBarClick={this.toggleBackdrop}
                />
                <main className={classes.main}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;