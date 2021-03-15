import React from 'react';
import ReactDOM from 'react-dom';
import { Visualizer } from "./components/visualizer";

export default function App() {
    return (
        <Visualizer/>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));