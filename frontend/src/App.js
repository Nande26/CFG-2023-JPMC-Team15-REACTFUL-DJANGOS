import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Hotjar from "@hotjar/browser";
import Donate from "./pages/Donate";
import StickyChatbotButton from "./components/ChatBot";
import ReactGA from "react-ga";
import Events from "./pages/Events";
import { useEffect } from "react";

ReactGA.initialize("G-0G7JSW46W0");

const siteId = 3574866;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "Visited",
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <StickyChatbotButton />
      </Router>
    </div>
  );
}

export default App;
