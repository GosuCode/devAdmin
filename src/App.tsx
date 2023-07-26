import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./HOC/navigation/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
