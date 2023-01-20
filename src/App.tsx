import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import JoinInPage from "./pages/JoinInPage";
import ToDoDetailPage from "./pages/ToDoDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="toDoDetail/:id" element={<ToDoDetailPage />} />
        <Route path="joinIn" element={<JoinInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
