import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Movie from './components/movie';
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path={"/:prefix/:id"} element={<Movie />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
