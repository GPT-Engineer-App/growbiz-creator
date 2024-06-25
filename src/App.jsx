import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Services from "./pages/Services.jsx";
import Founder from "./pages/Founder.jsx";
import FuturePlans from "./pages/FuturePlans.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/founder" element={<Founder />} />
        <Route exact path="/future-plans" element={<FuturePlans />} />
      </Routes>
    </Router>
  );
}

export default App;