import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ReactRouter from "./components/ReactRouter.jsx";
import Home from "./components/reactRouterComponents/Home/Home.jsx";
import About from "./components/reactRouterComponents/About/About.jsx";
import Contact from "./components/reactRouterComponents/Contact/Contact.jsx";
import User from "./components/reactRouterComponents/User/User.jsx";
import Github, {
  githubApiCall,
} from "./components/reactRouterComponents/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ReactRouter />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ReactRouter />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={githubApiCall} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
