import React from 'react';
import L from 'leaflet';

export class Visualizer extends React.Component<{}, {}> {
    explorer: L.Map;

    constructor(props: {}) {
        super(props);
        this.plotEtr = this.plotEtr.bind(this);
    }

    render() {
        return <div id='explorer' style={{height: '512px', width: '512px', float: 'left'}}/>;
    }

    componentDidMount(): void {
        this.explorer = L.map('explorer', {
           center: [37.8, -96],
           zoom: 3
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.explorer);

        this.plotEtr();
    }

    plotEtr(): void {
        const etr = require('../resources/etr.json');
        const max = etr.properties.max_etr;

        for (let feature of etr.features) {
            const coords = feature.geometry.coordinates;
            const value = feature.properties.average;

            const latlngs = [];
            for (let coord of coords) {
                latlngs.push({lat: coord[0], lng: coord[1]});
            }
            const polygon = new L.Polygon(latlngs, {
                color: this.colorForPercentage(value / max),
                stroke: false
            }).bindPopup('etr: ' + value.toFixed(2)).on('mouseover', () => {
                polygon.openPopup();
            }).on('mouseout', () => {
                polygon.closePopup();
            }).addTo(this.explorer);
        }
    }

    colorForPercentage(pct: number): string {
        const percentColors = [
            { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
            { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
            { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

        for (var i = 1; i < percentColors.length - 1; i++) {
            if (pct < percentColors[i].pct) {
                break;
            }
        }
        var lower = percentColors[i - 1];
        var upper = percentColors[i];
        var range = upper.pct - lower.pct;
        var rangePct = (pct - lower.pct) / range;
        var pctLower = 1 - rangePct;
        var pctUpper = rangePct;
        var color = {
            r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
            g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
            b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    }
}