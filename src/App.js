import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/home.component";

import "./App.scss";



function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
    </div>
  );
}

export default App;

//#0e1555
//#4e1184
//#932b77
//#fd367e

//#000033
//#0066cc
//#0099ff
//#ededed
