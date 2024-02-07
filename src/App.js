import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import PortfolioDetailForm from "./pages/components/PortfolioDetailForm";
import UserPortfolio from "./pages/UserPortfolio";
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/portfolio' element={<PortfolioDetailForm />} />
      <Route exact path='/user' element={<UserPortfolio />} />
    </Routes>

  );
}

export default App;
