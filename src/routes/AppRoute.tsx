import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../layout/components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ToDoDetailPage from "../pages/ToDoDetailPage";
import { Store } from "../store/types/store";

const AppRoute = () => {
  const isLogin = useSelector((state: Store) => state.login.isLogin);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {isLogin && <Route path="/" element={<HomePage />} />}
        {isLogin && (
          <Route path="toDoDetail/:id" element={<ToDoDetailPage />} />
        )}

        {!isLogin && <Route path="signUp" element={<SignUpPage />} />}

        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
