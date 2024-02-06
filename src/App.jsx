import Nav from "./layout/NavBar";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./pages/AuthScreens/SignInForm";
import Activation from "./pages/AuthScreens/Activation";
import ForgotPassword from "./pages/AuthScreens/ForgotPassword";
import ResetPassword from "./pages/AuthScreens/ResetPassword";
import SignUpForm from "./pages/AuthScreens/SignUpForm";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Discover from "./pages/Discover";
import Privacy from "./pages/AuthScreens/Privacy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/activation" element={<Activation />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/privacypolicy" element={<Privacy />} />

        <Route path="/unauthorized" element={<Layout />} />
        <Route path="/" element={<Layout />}>
          <Route path="/errorscreen" element={<Layout />} />
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
