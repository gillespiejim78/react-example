import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class ExamplePlot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const trace1 = {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'markers',
          };
        const trace2 = {
            x: [4, 6, 9],
            y: [3, 12, 13],
            type: 'scatter',
            mode: 'markers',
          };
        return ( 
            <Plot
            data={[trace1, trace2]}
            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }/>
        );
    }
}
 
export default ExamplePlot;