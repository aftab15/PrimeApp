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
import RequireAuth from "./pages/AuthScreens/RequireAuth";

const ROLES = {
  Free: 200,
  Explorer: 200,
  Admin: 300,
};

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
        <Route path="/unauthorized" element={<Privacy />} />

        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Free]} />}>
            <Route path="/errorscreen" element={<Layout />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Free]} />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Free]} />}>
            <Route path="/discover" element={<Discover />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Free]} />}>
            <Route path="/enrich" element={<Layout />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Free]} />}>
            <Route path="/onboarding" element={<Layout />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Free]} />}>
            <Route path="/list" element={<Layout />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
