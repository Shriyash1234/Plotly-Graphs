import React,{useState} from 'react';
import Plot from 'react-plotly.js';

const Graph = () => {
    
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

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

    setXData(xValues);
    setYData(yValues);
  };

  const layout = {
    title: 'Uploaded CSV Graph',
    xaxis: {
      title: 'X-axis',
    },
    yaxis: {
      title: 'Y-axis',
    },
  };

  const data = [
    {
      x: xData,
      y: yData,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
    },
  ];

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {xData.length > 0 && yData.length > 0 && (
        <Plot data={data} layout={layout} />
      )}
    </div>
  );
};

export default Graph;
  