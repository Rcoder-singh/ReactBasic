import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import PropsDemo from "./components/PropsDemo";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import ContextProps from "./components/ContextProps";
import { routes } from "./Routes";

function App() {
  // const name = "Rishabh";
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}

          {/* <Route path="/" element={<Layout component={<Home />} />} />
          <Route
            path="/about-us"
            element={<Layout component={<AboutUs />} />}
          />
          <Route
            path="/contact-us"
            element={<Layout component={<ContactUs />} />}
          />
          <Route path="/props" element={<Layout component={<PropsDemo />} />} />
          <Route
            path="/products"
            element={<Layout component={<Products />} />}
          />
          <Route
            path="/products/:id/:category"
            element={<Layout component={<ProductDetail />} />}
          />
          <Route
            path="/context-props"
            element={<Layout component={<ContextProps />} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
