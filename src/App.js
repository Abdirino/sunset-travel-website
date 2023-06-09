import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import ScrollToTop from "./routes/ScrollToTop";
import Blog from "./routes/Blog/Blog";
import TourDetails from "./routes/TourDetails/TourDetails";

export default function App() {
  return (
    <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/tourDetails" element={<TourDetails />} />
        </Routes>
    </div>
  );
}
