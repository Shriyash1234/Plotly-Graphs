import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const BarChart = () => {
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
    const labels = [];
    const values = [];

    lines.forEach((line) => {
      const [label, value] = line.split(',');
      labels.push(label.trim());
      values.push(parseFloat(value));
    });

    const chartData = [
      {
        x: labels,
        y: values,
        type: 'bar',
      },
    ];

    setData(chartData);
  };

  return (
    <div>
      <h2>Bar Chart Data</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length > 0 && <Plot data={data} />}
    </div>
  );
};

export default BarChart;
