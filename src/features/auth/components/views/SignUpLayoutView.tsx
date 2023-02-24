import React, { Suspense } from "react";
import LoadingView from "../../../../common/Loading/components/views/LoadingView";

const SignUpLayoutView = () => {
  const SignUp = React.lazy(() => import("../SignUp"));
  return (
    <Suspense fallback={<LoadingView />}>
      <SignUp />
    </Suspense>
  );
};

export default SignUpLayoutView;
