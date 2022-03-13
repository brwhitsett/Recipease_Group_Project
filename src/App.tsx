// Did this delete?!?!

import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recipes/complexSearch" element={<Main />} />
          <Route path="/recipes/{id}/information" element={<Details />} />
          <Route path="/recipes/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
