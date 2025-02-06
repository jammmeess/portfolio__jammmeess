import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SCSS from "./scss/index.scss";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
