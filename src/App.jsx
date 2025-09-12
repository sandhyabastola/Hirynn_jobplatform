import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import AboutPage from "./components/AboutPage"
import JobsPage from "./components/JobsPage"
import JobDetailPage from "./components/JobDetailPage"
import ContactPage from "./components/ContactPage"
import Login from "./components/Login"
import Register from "./components/register_temp"
import Institutions from "./components/Institutions"  
import Layout from "./components/layout/Layout"; // adjust the path if needed


function App() {
  return (
    <Router>
      <Layout>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register_temp" element={<Register />} />
        </Routes>
      </div>
      </Layout>
    </Router>
  )
}

export default App
