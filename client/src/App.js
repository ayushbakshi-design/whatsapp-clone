// Dependencies
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// custom imports
import Home from "./home.jsx";
import "./styles/extra.css";
import RegisterPage from "./RegisterPage.jsx";
import LoginPage from "./loginPage";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <Routes>
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/" exact element={<LoginPage />} />
            

            <Route path="Home" exact element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
