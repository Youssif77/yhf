import { useContext } from "react";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";

import "./App.css";
import { ThemeContext } from "./shared/theme-context";

function App() {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={themeCtx.darkMode ? "dark-mode" : "light-mode"}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
