import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const MutlipleLineGraph = () => {
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
    const parsedData = [];

    lines.forEach((line) => {
      const [x, ...yValues] = line.split(',');
      const dataPoint = {
        x: x.trim(),
        y: yValues.map((y) => parseFloat(y)),
        type: 'scatter',
        mode: 'lines+markers',
      };
      parsedData.push(dataPoint);
    });

    setData(parsedData);
  };

  return (
    <div>
      <h2>Line Graph Data</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length > 0 && <Plot data={data} />}
    </div>
  );
};

export default MutlipleLineGraph;
