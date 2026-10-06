import { Suspense } from "react";
import LoginForm from "../_components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">LoginPage</h1>
      <Suspense>
         <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
