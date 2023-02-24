import React, { Suspense } from "react";
import LoadingView from "../../../../common/Loading/components/views/LoadingView";

const LoginLayoutView = () => {
  const Login = React.lazy(() => import("../Login"));
  return (
    <Suspense fallback={<LoadingView />}>
      <Login />
    </Suspense>
  );
};

export default LoginLayoutView;
