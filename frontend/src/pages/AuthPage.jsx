import React, { useState } from "react";
import LoginForm from "../components/AuthPage/LoginForm";
import SignupForm from "../components/AuthPage/SignupForm";

const AuthPage = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="width-[100vw] flex h-screen dark:bg-gray-900 justify-center items-center">
      <div className=" flex items-center justify-center m-auto bg-gray-900">
        <div className="w-fit flex flex-col items-center justify-center m-auto">
          {login ? (
            <LoginForm login={login} setLogin={setLogin} />
          ) : (
            <SignupForm login={login} setLogin={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
