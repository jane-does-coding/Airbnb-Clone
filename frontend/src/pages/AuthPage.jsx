import React, { useState } from "react";
import LoginForm from "../components/AuthPage/LoginForm";
import SignupForm from "../components/AuthPage/SignupForm";

const AuthPage = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="width-full flex h-screen bg-gray-900">
      {/*       <div className="h-screen">
        <img src="/authbanner.jpg" className="w-full h-screen" alt="" />
      </div> */}
      <div className="p-6 w-full  flex items-center justify-center">
        <div className="w-fit flex flex-col">
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
