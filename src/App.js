import React, { Component } from 'react';
import './theme/main.scss';
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import Dialog from "./components/UI/Dialog/Dialog";

class App extends Component {

    state = {
        open : true
    }


    render() {

        return (
            <div className="App" id={"app"}>
                <Input />
                <Button>Steva</Button>
                <Button primary>Steva</Button>
                <Button primary look={"flat"}> Steva</Button>
                <Dialog
                    open={this.state.open}
                    title="Book details"
                    close={ () => this.setState({ open: false }) }
                    footerActionLabel={"Close"}
                >
                </Dialog>
            </div>
        );
    }
}

export default App;