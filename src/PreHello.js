import React, { Component } from "react";
import Hello from "./Hello";
import store from "./store";
import { Provider } from 'react-redux';

class PreHello extends Component {
    render() {
        return (
            <Provider store={store}>
                <Hello />
            </Provider>
        )
    }
}

export default PreHello;