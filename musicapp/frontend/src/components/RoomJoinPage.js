import React, { Component } from 'react';
import { render } from'react-dom';

export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>RoomJoinPage</h1>;
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);
import React, { Component } from 'react';
import { render } from'react-dom';