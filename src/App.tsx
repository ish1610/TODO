import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import AppRoute from "./components/Routes/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
