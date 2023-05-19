import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="food" element={<RootLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const RootLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
