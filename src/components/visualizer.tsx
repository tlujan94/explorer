import * as React from 'react';
import L from 'leaflet';

export class Visualizer extends React.Component<{}, {}> {
    explorer: L.Map;

    render() {
        return <div id='explorer' style={{height: '512px', width: '512px', float: 'left'}}/>
    }

    componentDidMount(): void {
        this.explorer = L.map('explorer', {
           center: [37.8, -96],
           zoom: 3
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.explorer);
    }
}