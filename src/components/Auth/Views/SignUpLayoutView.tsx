import React, { Suspense } from "react";
import LoadingView from "../../Common/Loading/Views/LoadingView";

const SignUpLayoutView = () => {
  const SignUp = React.lazy(() => import("../SignUp"));
  return (
    <Suspense fallback={<LoadingView />}>
      <SignUp />
    </Suspense>
  );
};

export default SignUpLayoutView;
