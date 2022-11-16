import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/HomeScreen";
import CookesScreen from "./screens/CooksScreen";
import WaitersScreen from "./screens/WaitersScreen";
import PageNotFound from "./screens/PageNotFound";
  
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Waiters" element={<WaitersScreen />} />
            <Route path="/Cooks" element={<CookesScreen />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
  
export default App;