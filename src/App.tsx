import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
