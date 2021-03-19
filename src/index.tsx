import React from 'react';
import ReactDOM from 'react-dom';
import { Visualizer } from "./components/visualizer";
import { Toolbar } from './components/toolbar';

export default function App() {
    return (
        <div>
            <Toolbar/>
            <Visualizer/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));