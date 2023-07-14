/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";

import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Customizer />
    </main>
  );
};

export default App;
