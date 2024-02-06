import Nav from "./Layout/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import { BrowserRouter } from "react-router-dom";
import SignInForm from "./pages/AuthScreens/SignInForm";
import Activation from "./pages/AuthScreens/Activation";
import ForgotPassword from "./pages/AuthScreens/ForgotPassword";
import ResetPassword from "./pages/AuthScreens/ResetPassword";
import SignUpForm from "./pages/AuthScreens/SignUpForm";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/activation" element={<Activation />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
