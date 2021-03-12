import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Visualizer} from "./components/visualizer";

function App() {
    return (
        <Visualizer/>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));