import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Discover from "./pages/Discover";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public path */}
          <Route path="/signin" element={<Layout />} />
          <Route path="/signup" element={<Layout />} />
          <Route path="/forgot-password" element={<Layout />} />
          <Route path="/unauthorized" element={<Layout />} />
          <Route path="/errorscreen" element={<Layout />} />

          {/* private path */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/enrich" element={<Layout />} />
          <Route path="/onboarding" element={<Layout />} />
          <Route path="/list" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
