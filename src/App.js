import Graph from './Components/Graph';
import PieChart from './Components/piechart';
import ScatterPlot from './Components/scatterplot';
import BarChart from './Components/barchart';
import MutlipleLineGraph from './Components/mutliplelineplots';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Plotly Graph</h1>
      <Graph />
      <PieChart/>
      <ScatterPlot/>
      <BarChart/>
      <MutlipleLineGraph/>
    </div>
  );
}

export default App;
