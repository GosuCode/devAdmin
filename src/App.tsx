import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./HOC/navigation/Layout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          {/* <Route path="/createPost" element={<CreatePost />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
