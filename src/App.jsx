import Nav from "./Layout/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import { BrowserRouter } from "react-router-dom";
import AuthScreenContainer from "./pages/AuthScreens/AuthScreenContainer";
import SignInForm from "./pages/AuthScreens/SignInForm";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signin"
            element={<AuthScreenContainer screen="signin" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
