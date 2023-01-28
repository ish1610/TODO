import React, { Suspense } from "react";
import LoadingView from "../../Common/Loading/Views/LoadingView";

const LoginLayoutView = () => {
  const Login = React.lazy(() => import("../Login"));
  return (
    <Suspense fallback={<LoadingView />}>
      <Login />;
    </Suspense>
  );
};

export default LoginLayoutView;
