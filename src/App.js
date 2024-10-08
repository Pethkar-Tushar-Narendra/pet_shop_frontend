import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ContactSales from "./Components/ContactSales";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <ContactSales />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
