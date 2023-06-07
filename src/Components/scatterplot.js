import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const ScatterPlot = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      parseCSV(contents);
    };

    reader.readAsText(file);
  };

  const parseCSV = (csvData) => {
    const lines = csvData.split('\n');
    const xValues = [];
    const yValues = [];

    lines.forEach((line) => {
      const [x, y] = line.split(',');
      xValues.push(parseFloat(x));
      yValues.push(parseFloat(y));
    });

    const chartData = [
      {
        x: xValues,
        y: yValues,
        mode: 'markers',
        type: 'scatter',
      },
    ];

    setData(chartData);
  };

  return (
    <div>
      <h2>Scatter Plot Data</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length > 0 && <Plot data={data} />}
    </div>
  );
};

export default ScatterPlot;
