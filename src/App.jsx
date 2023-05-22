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
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Daily from "./components/Daily";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import {
  MealFrame,
  Monday,
  Tues,
  Weds,
  Thur,
  Fri,
  Dinner,
  Bfast,
  Lunch,
} from "./pages/Meals";

import MenuPork from "./pages/menu/MenuPork";
import MenuSoup from "./pages/menu/MenuSoup";
import MenuChicken from "./pages/menu/MenuChicken";
import MenuYong from "./pages/menu/MenuYong";
import MenuFruit from "./pages/menu/MenuFruit";
import MenuChili from "./pages/menu/MenuChili";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route basename="/food" path="food" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route path="daily" element={<Daily />}>
          <Route index element={<Navigate to="meal" />} />
          <Route path="meal" element={<MealFrame />} />
          <Route path="monday" element={<Monday />} />
          <Route path="tues" element={<Tues />} />
          <Route path="weds" element={<Weds />} />
          <Route path="thur" element={<Thur />} />
          <Route path="fri" element={<Fri />} />
          <Route path="bfast" element={<Bfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
        <Route path="menu" element={<Menu />}>
          <Route index element={<MenuPork />} />
          <Route path="menupork" element={<MenuPork />} />
          <Route path="menuchicken" element={<MenuChicken />} />
          <Route path="menuyong" element={<MenuYong />} />
          <Route path="menusoup" element={<MenuSoup />} />
          <Route path="menuchili" element={<MenuChili />} />
          <Route path="menufruit" element={<MenuFruit />} />
        </Route>
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
  const location = useLocation();

  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
