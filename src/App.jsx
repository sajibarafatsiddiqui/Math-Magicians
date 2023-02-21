import { Route, Routes } from 'react-router-dom';
import Layout from 'router/Layout';
import './App.css';
import Home from 'router/Home';
import CalculatorContainer from 'router/CalculatorContainer';
import Quote from 'router/Quote';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/math_magicians" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Calculator" element={<CalculatorContainer />} />
          <Route path="Quote" element={<Quote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
