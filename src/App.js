import React, { Component } from 'react';
import './theme/main.scss';
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";

class App extends Component {

    render() {

        return (
            <div className="App">
                <Input />
                <Button>Steva</Button>
                <Button primary>Steva</Button>
                <Button primary look={"flat"}> Steva</Button>
            </div>
        );
    }
}

export default App;