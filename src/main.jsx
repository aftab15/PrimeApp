import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
// import React from "react";
// import ReactDOM from "react-dom/client";
// import ErrorPage from "./layout/ErrorPage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import Contact from "./pages/Contact";
// import "./index.css";
// import AuthScreenContainer from "./pages/AuthScreens/AuthScreenContainer";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
//   {
//     path: "signin",
//     element: <AuthScreenContainer screen={"signin"} />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
