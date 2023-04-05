import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CellLines from './Components/CellLines';
import PSets from './Components/PSets';
import PSetsTable from './Components/PSetsTable';
import React from 'react';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/celllines' exact element={<CellLines />} />
        <Route path='/psets' exact element={<PSets />} />
        <Route path='/psetstable' exact element={<PSetsTable />} />
      </Routes>
    </Router>
		</React.Fragment>
  );
}

export default App;
